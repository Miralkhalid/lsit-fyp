import React, { useLayoutEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StudentRecord from './StudentRecord';

const Update = ({ route, navigation }) => {
  const { id, email, name, password, date_of_birth, status } = route.params;
  const [newEmail, setNewEmail] = useState('');
  const [newStatus, setNewStatus] = useState('');
  const [newName, setNewName] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newStudentId, setNewStudentId] = useState('');
  const [newDateOfBirth, setNewDateOfBirth] = useState('');

  const [errors, setErrors] = useState({});

  const handleStudent = async () => {
    try {
      const token = await AsyncStorage.getItem('jwtToken');

      const response = await axios.get(`http://192.168.0.106:8000/api/admin/student/show/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.data.data);
      if (response.data.data) {
        // setStudents(response.data.data);

        // setFilteredStudents(response.data.data);
        setNewPassword(response.data.data['student'].password);
        setNewDateOfBirth(response.data.data['student'].date_of_birth);
        setNewName(response.data.data['student'].name);
        setNewEmail(response.data.data['student'].email);
        setNewStatus(response.data.data['student'].status);
        setNewStudentId(response.data.data['student'].student_id);
      }
    } catch (error) {
      console.error('Error fetching student list:', error);
      // setError(error.message);
    }
  };
useLayoutEffect( () => {
  handleStudent();
}, [id]);

  const handleSave = async () => {
    try {
      const token = await AsyncStorage.getItem('jwtToken');
      const updatedData = {
        email: newEmail,
        name: newName,
        status: newStatus,
        password: newPassword,
        studentid: newStudentId,
        date_of_birth: newDateOfBirth,
      };

      const response = await axios.post(`http://10.0.2.2:8000/api/admin/student/update/${id}`, updatedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        console.log('updatecall');
        navigation.navigate(StudentRecord); // Navigate back to the previous screen

      } else {
        setErrors({ general: 'Failed to update student' });
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
        placeholder='Password'
        style={styles.input}
        value={newPassword}
        onChangeText={setNewPassword}
      />
      {errors.password && <Text style={styles.errorText}>{errors.password.join(', ')}</Text>}

      <TextInput
        placeholder='Student Id'
        style={styles.input}
        value={newStudentId}
        onChangeText={setNewStudentId}
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
      
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  text: {
    color: '#3b3b66',
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: '5%',
    fontSize: 16,
    marginVertical: '10%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#3b3b66',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    color: '#3b3b66',
    marginHorizontal: '5%',
  },
  saveButton: {
    backgroundColor: '#3b3b66',
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 10,
    marginHorizontal: '5%',
    marginTop: 20,
  },
  buttonText: {
    color: '#cdcddb',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '700',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginHorizontal: '5%',
    marginBottom: 15,
  },
});

export default Update;


