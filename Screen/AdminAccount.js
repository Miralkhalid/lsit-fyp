import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from '../Login';

const Account = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [id, setId] = useState(1); // Example user ID state
    const [editing, setEditing] = useState(true);

    const fetchProfileData = async () => {
        try {
            const token = await AsyncStorage.getItem('jwtToken');
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };
            const response = await axios.get(`http://192.168.0.106:8000/api/profile/edit/${id}`, config);
            const { data } = response.data; // Destructure the response
            const { name, email } = data.user; // Adjust based on actual response structure
            setName(name);
            setEmail(email);
            // setPhone(phone);
        } catch (error) {
            console.error('Error fetching profile details:', error);
            Alert.alert('Error', 'Failed to fetch profile details');
        }
    };

    useEffect(() => {
        fetchProfileData();
    }, []);

    const handleSave = async () => {
        try {
            const token = await AsyncStorage.getItem('jwtToken');
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };
            const response = await axios.post(`http://192.168.0.106:8000/api/profile/update/${id}`, {
                name: name,
                email: email,
                role: role,
            }, config);

            if (response.status === 200) {
                Alert.alert('Success', 'Profile updated successfully');
                setEditing(true); // Exit editing mode after save
            } else {
                Alert.alert('Error', 'Failed to update profile');
            }
        } catch (error) {
            console.error('Error saving profile:', error);
            Alert.alert('Error', 'An error occurred while updating your profile');
        }
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={require('./LSIT(1).png')} style={{ height: '100%', width: '100%' }} >
            <Text style={styles.title}>Profile</Text>
            {/* <Text style={styles.caption}>You can edit your account here!</Text> */}
            {/* <View style={styles.horizontal}></View> */}
            <View style={styles.profileInfo}>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    editable={editing}
                />
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    editable={editing}
                />
                 <TextInput
                    style={styles.input}
                    value={role}
                    // onChangeText={setEmail}
                    // editable={editing}
                />
            </View>
            {/* {!editing ? (
                <TouchableOpacity onPress={() => setEditing(true)} style={styles.editButton}>
                    <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
            )} */}
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        // paddingHorizontal: 20,
    },
    title: {
        marginTop:'65%',
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 10,
        marginHorizontal:'10%',
        color: '#3b3b66',
    },
    caption: {
        marginBottom: 10,
        color: '#3b3b66',
    },
    profileInfo: {
        width: '100%',
        marginBottom: 5,
        marginVertical:'6%',
        marginHorizontal:'20%',
    },
    input: {
        // textAlign: 'center',
        paddingHorizontal: 12,
        fontSize: 14,
        fontWeight: '400',
        color: '#3b3b66',
        justifyContent: 'center',
        marginTop: 10,
    },
    editButton: {
        backgroundColor: '#3b3b66',
        paddingVertical: 12,
        paddingHorizontal: 35,
        borderRadius: 5,
    },
    saveButton: {
        backgroundColor: '#8c8c9f',
        paddingVertical: 12,
        paddingHorizontal: 35,
        borderRadius: 5,
    },
    buttonText: {
        color: '#cdcddb',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '700',
    },
    horizontal: {
        marginTop: 10,
        backgroundColor: 'black',
        marginHorizontal: 22,
        width: 250,
        height: 1,
        marginBottom: 5,
    },
});

export default Account;
