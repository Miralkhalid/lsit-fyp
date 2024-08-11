import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UpdateStudentDetail = ({ route, navigation }) => {
  const { id, email, name, date_of_birth, status, onUpdate } = route.params;
  const [newEmail, setNewEmail] = useState(email);
  const [newStatus, setNewStatus] = useState(status);
  const [newName, setNewName] = useState(name);
  const [newPassword, setNewPassword] = useState('');
  const [newDateOfBirth, setNewDateOfBirth] = useState(date_of_birth);
  const [errors, setErrors] = useState({});

  const handleSave = async () => {
    try {
      const token = await AsyncStorage.getItem('jwtToken');
      const updatedData = {
        email: newEmail,
        name: newName,
        status: newStatus,
        date_of_birth: newDateOfBirth,
      };

      const response = await axios.post(`http://192.168.0.106:8000/api/admin/staff/update/${id}`, updatedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        console.log(response.data);
        navigation.goBack(); // Navigate back to the previous screen
      } else {
        setErrors({ general: 'Failed to update staff' });
      }
    } catch (error) {
      console.error('Error updating student:', error);
      if (error.response && error.response.status === 422) {
        const errorMessages = error.response.data.errors;
        setErrors(errorMessages);
      } else {
        setErrors({ general: 'Failed to update student' });
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Update Student Detail</Text>
      
      <TextInput
        placeholder='Email'
        style={styles.input}
        value={newEmail}
        onChangeText={setNewEmail}
      />
      {errors.email && <Text style={styles.errorText}>{errors.email.join(', ')}</Text>}
      
      <TextInput
        placeholder='Name'
        style={styles.input}
        value={newName}
        onChangeText={setNewName}
      />
      {errors.name && <Text style={styles.errorText}>{errors.name.join(', ')}</Text>}
      
      <TextInput
        placeholder='New Password'
        style={styles.input}
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry
      />
      {errors.password && <Text style={styles.errorText}>{errors.password.join(', ')}</Text>}
      
      <TextInput
        placeholder='Date of Birth'
        style={styles.input}
        value={newDateOfBirth}
        onChangeText={setNewDateOfBirth}
      />
      {errors.date_of_birth && <Text style={styles.errorText}>{errors.date_of_birth.join(', ')}</Text>}

      <TextInput
        placeholder='Status'
        style={styles.input}
        value={newStatus}
        onChangeText={setNewStatus}
      />
      {errors.status && <Text style={styles.errorText}>{errors.status.join(', ')}</Text>}
      
      {errors.general && <Text style={styles.errorText}>{errors.general}</Text>}
      
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 8,
    borderRadius: 4,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginBottom: 8,
  },
});

export default UpdateStudentDetail;

