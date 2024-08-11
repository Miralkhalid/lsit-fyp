import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        handleJobs();
    }, []);

    const handleJobs = async () => {
        try {
            const response = await axios.get('http://10.0.2.2:8000/api/job/show');
           if (response.data && response.data.data && response.data.data.data) {
                console.log(response.data.data.data);
                setJobs(response.data.data.data);
            }
        } catch (error) {
            console.error('Error fetching jobs:', error);
            setError(error.message);
        }
    };

    const renderItem = ({ item }) => (
        <View style={styles.studentItem}>
            <Text style={styles.style}><Text style={{fontWeight:'700', color:'#cdcddb'}}>Title: </Text>{item.title}</Text>
            <Text style={styles.style}><Text style={{fontWeight:'700', color:'#cdcddb'}}>Company: </Text>{item.company}</Text>
            <Text style={styles.style}><Text style={{fontWeight:'700', color:'#cdcddb'}} >Location: </Text>{item.location}</Text>
            <Text style={styles.style}><Text style={{fontWeight:'700', color:'#cdcddb'}}>Description: </Text>{item.description}</Text>
            <Text style={styles.style}><Text style={{fontWeight:'700', color:'#cdcddb'}}>Email: </Text>{item.contact_email}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            {error ? (
                <Text style={styles.error}>Error: {error}</Text>
            ) : (
                <FlatList
                    data={jobs}
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
    email: {
        fontSize: 16,
        marginBottom: 4,
    },
    department: {
        fontSize: 14,
        color: '#555',
        marginBottom: 4,
    },
    error: {
        fontSize: 18,
        color: 'red',
        textAlign: 'center',
      //  marginTop: 20,
    },
});

export default Jobs;
