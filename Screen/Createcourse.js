import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert, ImageBackground, ScrollView } from 'react-native';
import axios from 'axios';


const Createcourse = () => {
    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const [department, setDepartment] = useState('');
    const [semester, setSemester] = useState('');
    const [credit_hour, setCreditHour] = useState('');

    const handleCreateCourse = async () => {
        try {
            console.log({
                code,
                name,
                department,
                semester,
                credit_hour,
                
            });
            const response = await axios.post('http://192.168.0.104:8000/api/course/create', {
                code: code,
                name:  name,
                department: department,
                semester:semester,
                credit_hour:credit_hour,
                created_by: 1,
            });
        
            Alert.alert('Success', 'Course created successfully');
            console.log(response.data);
            
        } catch (error) {
            console.error('Error creating course:', error);
            Alert.alert('Error', 'Failed to create course');
        }
    };

    return (
     <View style={styles.container}>
        <ScrollView>
       <ImageBackground source={require('./lsitlogobg.png')} style={{height:'120%', width:'100%'}}>
      
        <View style={styles.form}>
        <Text style={styles.caption}>Enter Course Details !</Text>
            <TextInput
                style={styles.input}
                placeholder="Course code"
                value={code}
                onChangeText={setCode}
            />
            <TextInput
                style={styles.input}
                placeholder="Course name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Department"
                value={department}
                onChangeText={setDepartment}
            />
            <TextInput
                style={styles.input}
                placeholder="Semester"
                value={semester}
                onChangeText={setSemester}
            />
            <TextInput
                style={styles.input}
                placeholder="Credit hour"
                value={credit_hour}
                onChangeText={setCreditHour}
            />
            <TouchableOpacity style={styles.button} onPress={handleCreateCourse}>
                <Text style={styles.buttonText}>Create Course</Text>
            </TouchableOpacity>
        </View>
        </ImageBackground>
        </ScrollView>
        </View> 
    );
};

const styles = StyleSheet.create({
   container:{
     backgroundColor:'white',
    height:'100%',
   },
    form: {   
        marginTop:'50%', 
        // padding: 10,
        backgroundColor: '#fff',
       // justifyContent:'center',
        alignItems:'center',
    },
    input: {
        // height: ,
        borderColor: '#3b3b66',
        // borderWidth: 1,
        borderLeftWidth:1,
        borderRightWidth:1,
        borderBottomWidth:2,
        marginBottom: 10,
        width:'70%',
        borderRadius: 10,
        paddingHorizontal: 10,
        color:'#8c8c9f',
        fontWeight:'500',
    },
    button: {
        backgroundColor: '#3b3b66',
        paddingVertical: 12,
        borderRadius: 10,
        marginTop: 20,
        width:'70%',
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        // fontWeight: '500',
        fontSize: 16,
    },
    caption:{
        color:'#3b3b66',
        marginBottom:15,
        fontSize:14,
        fontWeight:'500',
        textAlign:'center',
    }
});

export default Createcourse;
