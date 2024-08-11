import React, { useState } from 'react';
import {Alert, View, TextInput, ImageBackground, ScrollView, TouchableOpacity, Text, StyleSheet, ActivityIndicator, Modal } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StaffBoard from './Staff/StaffBoard';

const Staff = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false); 
  const [successModalVisible, setSuccessModalVisible] = useState(false);

  const handleLogin = async () => {
    setLoading(true); // Start loading
    setModalVisible(true); // Show modal
    try {
      if (!email || !password) {
        Alert.alert('Error', 'Please enter both email and password');
        return;
      }
      console.log(email, password );
      const response = await axios.post('http://192.168.0.106:8000/api/login',{
        email: email,
        password: password,
        role: 'staff'
      });
      console.log('Response:', response.data);
      if (response.data && response.data.status === 'success' && response.data.data.access_token) {
        await AsyncStorage.setItem('jwtToken', response.data.data.access_token);
        console.log(response.data.data["user-detail"].id);

        if(response.data.data['user-detail'].role === 'staff')
        {
          const staffId = response.data.data['user-detail'].id;
          await AsyncStorage.setItem('staffId', JSON.stringify(staffId));
          setSuccessModalVisible(true); // Show success modal
          setTimeout(() => {
            setSuccessModalVisible(false); // Hide success modal after 2 seconds
            navigation.navigate("StaffBoard");
                 }, 2000);
        }
       
      } else {
        Alert.alert('Login failed');
      }
    } catch (error) {
        console.error('Login error:', error.response ? error.response.data : error.message);
        Alert.alert('Login failed', error.response ? error.response.data.message : error.message);
      // Alert.alert('Login failed', error.message);
    } finally {
      setLoading(false);
      setModalVisible(false); // Hide modal
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground source={require('./lsitlogobg.png')} style={{height:'105%'}}>
          <View style={styles.form}>
            <Text style={styles.caption}>Welcome To LSIT!</Text>
            <Text style={styles.text}>Email</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setEmail(text)}
              value={email}
              keyboardType='email-address'
              autoCapitalize='none'
            />
            <Text style={styles.text}>Password</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setPassword(text)}
              value={password}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={togglePasswordVisibility} style={styles.toggleButton}>
              <Text style={styles.toggleButtonText}>{showPassword ? 'Hide' : 'Show Password'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <ActivityIndicator size="large" color="#3b3b66" />
            <Text style={styles.loadingText}>Loading...</Text>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={successModalVisible}
        onRequestClose={() => {
          setSuccessModalVisible(!successModalVisible);
        }}
      >
        <View style={styles.modalBackground}>
          <View style={styles.successModalContainer}>
            <Text style={styles.successText}>Login successful!</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
   backgroundColor:'white',
   height:'100%',
  },
  form: {
    marginVertical: '60%',
    marginHorizontal: '14%',
  },
  caption: {
    color: '#3b3b66',
    fontWeight: '400',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: '10%',
  },
  text: {
    color: '#3b3b66',
    fontWeight: '500',
  },
  input: {
    borderLeftWidth: 1,
    borderRightWidth:1,
    borderBottomWidth:2,
    borderColor: "#3b3b66",
    padding: 10,
    marginBottom: 10,
    marginTop:2,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#3b3b66",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    width: '100%',
    // marginHorizontal: '25%',
    marginTop: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  toggleButtonText: {
    color: '#8c8c9f',
    fontWeight: '600',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 150,
    height: 150,
    // backgroundColor: '#cdcddb',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    color: '#cdcddb',
    fontWeight: 'bold',
  },
  successModalContainer: {
    width: 200,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  successText: {
    color: '#3b3b66',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Staff;


