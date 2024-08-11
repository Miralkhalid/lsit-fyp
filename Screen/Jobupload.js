import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert, Image, ScrollView} from 'react-native';
import axios from 'axios';

const Jobupload = () => {
    const [title, setTitle] = useState('');
    const [company, setCompany] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [contact_Email, setContactEmail] = useState('');

    const handleUploadJob = async () => {
        try {
         
           console.log(
            {
                title,
                company,
                location,
                description,
                contact_Email,
            }
           );
                const response = await axios.post('http://192.168.0.106:8000/api/job/store', {
                    title: title,
                    company: company,
                    location: location,
                    description: description,
                    contact_email: contact_Email,
                    created_by: 1,
                  });
            if (response) {
              Alert.alert('Success', 'Job uploaded successfully');
            console.log(response);
            } else {
                throw new Error('Failed to upload job');
            }
        } catch (error) {
            console.error('Error uploading job:', error);
          // Alert.alert('Error', 'Failed to upload job');
        }
    };

    return (
        
        <View style={styles.container}>
            <ScrollView>
            <Image source={require('./download.png')} style={{height:'15%',width:'25%', alignSelf:'center', marginTop:'10%'}}></Image>
            <View style={styles.form}>
                <Text style={styles.caption}>Create Job Here!</Text>
            <TextInput
                style={styles.input}
                placeholder="Job Title"
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                style={styles.input}
                placeholder="Company"
                value={company}
                onChangeText={setCompany}
            />
            <TextInput
                style={styles.input}
                placeholder="Location"
                value={location}
                onChangeText={setLocation}
            />
            <TextInput
                style={[styles.input, { height: 100 }]}
                placeholder="Job Description"
                multiline
                value={description}
                onChangeText={setDescription}
            />
            <TextInput
                style={styles.input}
                placeholder="Contact Email"
                keyboardType="email-address"
                value={contact_Email}
                onChangeText={setContactEmail}
            />
            <TouchableOpacity style={styles.button} onPress={handleUploadJob}>
                <Text style={styles.buttonText}>Upload Job</Text>
            </TouchableOpacity>
            </View>
            </ScrollView>
             </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // padding: 15,
        backgroundColor: '#fff',
         height:'100%',
    },
    caption:{
        textAlign:'center',
        color:'#3b3b66',
        fontWeight:'500',
        fontSize:16,
        marginBottom:'5%',
    },
    form:{
         marginVertical:'5%',
         marginHorizontal:'10%',
    },
    input: {
        height: 40,
        borderColor: '#3b3b66',
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#3b3b66',
        paddingVertical: 12,
        borderRadius: 10,
        marginTop: 20,
        marginBottom:'60%',
    },
    buttonText: {
        textAlign: 'center',
        color: '#cdcddb',
        fontWeight: '700',
        fontSize: 16,
    },
});

export default Jobupload;
