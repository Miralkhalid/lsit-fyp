import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Reset = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [c_password, setCPassword] = useState('');

  const handleSubmit = async () => {
    if (password === '' || c_password === '') {
      Alert.alert('Error', 'Both fields are required');
      return;
    }

    try {
      const token = await AsyncStorage.getItem('jwtToken');
      const response = await axios.post('http://192.168.0.106:8000/api/student/change-password', {
        password: password,
        c_password: c_password,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.status === 'success') {
        console.log(response.data.status);
        Alert.alert('Success', 'Password changed successfully');
        navigation.navigate('Login'); // Navigate to login or another appropriate screen
      } else {
        Alert.alert('Error', response.data.message || 'Failed to change password');
      }
    } catch (error) {
      console.error('Error changing password:', error);
      Alert.alert('Error', 'Failed to change password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Did you forget your password?</Text>
      <Text style={styles.captiontext}>Don't worry, you can change it here</Text>
      <View style={styles.form}>
        <Text style={styles.formtext}>Old Password</Text>
        <TextInput
          style={styles.TextInput}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Text style={styles.formtext}>New Password</Text>
        <TextInput
          style={styles.TextInput}
          value={c_password}
          onChangeText={setCPassword}
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
        <Text style={styles.button}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
    marginTop: 150,
    fontFamily: 'tahoma',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3b3b66',
  },
  form: {
    marginHorizontal: 50,
    marginTop: '5%',
  },
  TextInput: {
    borderColor: '#3b3b66',
    borderWidth: 1,
    borderRadius: 5,
    color: '#8c8c9f',
    padding: 10,
    marginTop: 10,
  },
  formtext: {
    color: '#3b3b66',
    marginTop: 15,
    fontSize: 15,
  },
  captiontext: {
    color: '#8c8c9f',
    textAlign: 'center',
    marginTop: 5,
  },
  button: {
    backgroundColor: '#8c8c9f',
    width: 150,
    textAlign: 'center',
    padding: 15,
    borderRadius: 5,
    color: '#cdcddb',
    fontWeight: '500',
  },
  btn: {
    marginHorizontal: '30%',
    marginTop: 20,
  },
});

export default Reset;
