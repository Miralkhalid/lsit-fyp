import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Replace this URL with the actual URL of your Laravel backend
const API_URL = 'http://10.0.2.2:8000/api';

const LibraryInfo = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');
  const [publicationDate, setPublicationDate] = useState('');
  const [genre, setGenre] = useState('');

  const handleAddBook = async () => {
    if (!title || !author || !isbn || !publicationDate || !genre) {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    try {
      const token = await AsyncStorage.getItem('jwtToken');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      const response = await axios.post(`${API_URL}/admin/book/create`, {
        title,
        author,
        isbn,
        publication_date: publicationDate,
        genre
      }, config);

      if (response.data) {
        Alert.alert('Success', 'Book added successfully');
        resetForm();
      }
    } catch (error) {
      console.error('Error adding book', error);
      if (error.response) {
        const errors = error.response.data.errors;
        if (errors && Object.keys(errors).length > 0) {
          const firstErrorKey = Object.keys(errors)[0];
          Alert.alert('Validation Error', errors[firstErrorKey][0]);
        } else {
          Alert.alert('Error', error.response.data.message || 'Failed to add book');
        }
      } else {
        Alert.alert('Error', 'Network error. Please try again later.');
      }
    }
  };

  const resetForm = () => {
    setTitle('');
    setAuthor('');
    setIsbn('');
    setPublicationDate('');
    setGenre('');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Add Book</Text>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
        placeholder="Author"
        value={author}
        onChangeText={setAuthor}
        style={styles.input}
      />
      <TextInput
        placeholder="ISBN"
        value={isbn}
        onChangeText={setIsbn}
        style={styles.input}
      />
      <TextInput
        placeholder="Publication Date (YYYY-MM-DD)"
        value={publicationDate}
        onChangeText={setPublicationDate}
        style={styles.input}
      />
      <TextInput
        placeholder="Genre"
        value={genre}
        onChangeText={setGenre}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddBook}>
        <Text style={styles.buttonText}>Add Book</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3b3b66',
    textAlign: 'center',
    marginTop: '10%',
  },
  input: {
    height: 40,
    borderColor: '#3b3b66',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 12,
    paddingHorizontal: 8,
    width: '100%',
  },
  button: {
    backgroundColor: "#3b3b66",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    width: '100%',
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default LibraryInfo;
