import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Subject = () => {
    const [courses, setCourses] = useState([]);
    const [error, setError] = useState(null);


    useLayoutEffect(() => {
   
        handleCourse();
    }, []);

    const handleCourse = async () => {
        // console.log(code, name, department,semester,credit_hour);
    //     const staffId= await AsyncStorage.getItem('staffId');
    // console.log({staffId});
    const value = await AsyncStorage.getItem('staffId');
   console.log(value);
   let staffId;
    if (value) {
      staffId = JSON.parse(value);
      console.log('Retrieved Staff ID:', staffId);}
        try {
            const token = await AsyncStorage.getItem('jwtToken');

            const response = await axios.get(`http://192.168.0.106:8000/api/admin/staff/${staffId}/courses`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.data.data.courses) {
                console.log(response.data.data.courses);
                setCourses(response.data.data.courses); // Use the correct key from response
            } else {
                throw new Error('Unexpected response format');
            }
        } catch (error) {
            console.error('Error fetching courses:', error);
            setError(error.message);
        }
    };

    const renderItem = ({ item }) => (   
        <View style={styles.studentItem}>
            <Text style={styles.style}><Text style={{fontWeight:'700', color:'#cdcddb'}}>id: </Text>{item.id}</Text>
            <Text style={styles.style}><Text style={{fontWeight:'700', color:'#cdcddb'}}>code: </Text>{item.code}</Text>
            <Text style={styles.style}><Text style={{fontWeight:'700', color:'#cdcddb'}}>name: </Text>{item.name}</Text>
            <Text style={styles.style}><Text style={{fontWeight:'700', color:'#cdcddb'}} >department: </Text>{item.department}</Text>
            <Text style={styles.style}><Text style={{fontWeight:'700', color:'#cdcddb'}}>semester: </Text>{item.semester}</Text>
            <Text style={styles.style}><Text style={{fontWeight:'700', color:'#cdcddb'}}>credit_hour: </Text>{item.credit_hour}</Text>
        </View>
        
    );

    return (
        <View style={styles.container}>
            {error ? (
                <Text style={styles.error}>Error: {error}</Text>
            ) : (
                <FlatList
                    data={courses}
                    renderItem={renderItem}
                    // keyExtractor={(item) => item.id.toString()}
                    ListEmptyComponent={<Text style={styles.empty}>No courses available</Text>}
                />
                  )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    studentItem: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: '#3b3b66',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
    },
    style: {
        fontSize: 16,
        color:'#cdcddb',
        marginBottom: 4,
        fontWeight:'400',
    },
    error: {
        fontSize: 18,
        color: 'red',
        textAlign: 'center',
    },
});

export default Subject;
