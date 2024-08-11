import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const CourseListing = () => {
    const [course, setCourse] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        handleCourse();
    }, []);

    const handleCourse = async () => {
        try {
            const response = await axios.get('http://192.168.0.106:8000/api/course/list');
            if (response.data && response.data.data && response.data.data.data) {
                console.log(response.data.data.data);
                setCourse(response.data.data.data);
            }
        } catch (error) {
            console.error('Error fetching course:', error);
            setError(error.message);
        }
    };

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.style}><Text style={{fontWeight:'400', color:'white'}}>Course Code: </Text>{item.code}</Text>
            <Text style={styles.style}><Text style={{fontWeight:'400', color:'white'}}>Course Name: </Text>{item.name}</Text>
            <Text style={styles.style}><Text style={{fontWeight:'400', color:'white'}}>Department: </Text>{item.department}</Text>
            <Text style={styles.style}><Text style={{fontWeight:'400', color:'white'}}>Semester: </Text>{item.semester}</Text>
            <Text style={styles.style}><Text style={{fontWeight:'400', color:'white'}}>Credit_hour: </Text>{item.credit_hour}</Text>
            </View>
    );

    return (
        <View style={styles.container}>
            {error ? (
                <Text style={styles.error}>Error: {error}</Text>
            ) : (
                <FlatList
                    data={course}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                  //  extraData={selectedCourse}
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
        fontSize: 14,
        color:'white',
        backgroundColor:'#3b3b66',
        fontWeight:'300',
    },
   
    error: {
        fontSize: 18,
        color: 'red',
        textAlign: 'center',
        // marginTop: 20,
    },
});

export default CourseListing;
