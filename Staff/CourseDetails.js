import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const CourseDetails = ({ courseCode, courseName, creditHours }) => {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
            <Text style={styles.label}>Course Code:</Text>
            <Text style={styles.value}>{courseCode}</Text>

            <Text style={styles.label}>Course Name:</Text>
            <Text style={styles.value}>{courseName}</Text>

            <Text style={styles.label}>Credit Hours:</Text>
            <Text style={styles.value}>{creditHours}</Text>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
  
    box:{
        borderWidth: 1,
        backgroundColor:'#cdcddb',
        borderRadius: 5,
        padding: 25,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color:'#3b3b66',
    },
    value: {
        fontSize: 16,
        marginBottom: 10,
        color:'#8c8c9f',
        fontWeight:'700',
    },
});

export default CourseDetails;
