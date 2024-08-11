import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const Approvecourse = () => {
    const [coursedata, setCourseData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        handleCourse();
    }, []);

    const handleCourse = async () => {
        try {
            const response = await axios.get('http://192.168.0.106:8000/api/course-registeration/pending-approvals');
            if (response.data.data) {
                console.log(response.data.data);
                setCourseData(response.data.data);
            }
        } catch (error) {
            console.error('Error fetching course:', error);
            setError(error.message);
        }
    };

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            {/* <Text style={styles.style}><Text style={{fontWeight:'700', color:'#cdcddb'}}>Course Code: </Text>{item.id}</Text> */}
            <Text style={styles.style}><Text style={{fontWeight:'400', color:'white'}}>Course Code: </Text>{item.code}</Text>
            <Text style={styles.style}><Text style={{fontWeight:'400', color:'white'}}>Course Name: </Text>{item.name}</Text>
            <Text style={styles.style}><Text style={{fontWeight:'400', color:'white'}}>Department: </Text>{item.department}</Text>
            <Text style={styles.style}><Text style={{fontWeight:'400', color:'white'}}>Semester: </Text>{item.semester}</Text>
            <Text style={styles.style}><Text style={{fontWeight:'400', color:'white'}}>Credit_hour: </Text>{item.credit_hour}</Text>
            <Text style={styles.style}><Text style={{fontWeight:'400', color:'white'}}>Created_by: </Text>{item.created_by}</Text>
            </View>
    );

    return (
        <View style={styles.container}>
            {error ? (
                <Text style={styles.error}>Error: {error}</Text>
            ) : (
                <FlatList
                    data={coursedata}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                 
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
    item: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: '#3b3b66',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
    },
    style: {
        fontSize: 15,
        color:'white',
        backgroundColor:'#3b3b66',
        // fontWeight:'400',
    },
   
    error: {
        fontSize: 18,
        color: 'red',
        textAlign: 'center',
        // marginTop: 20,
    },
});

export default Approvecourse;
