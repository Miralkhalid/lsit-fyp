import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BSCS = () => {
  const [students, setStudents] = useState([
    { id: 1, rollno: 'bsf100', name: 'Fatima', present: false },
    { id: 2, rollno: 'bsf101', name: 'Amna', present: false },
    { id: 3, rollno: 'bsf102', name: 'Aiza', present: false },
    // Add more students as needed
  ]);

  const handleAttendance = async () => {
    try {
      const token = await AsyncStorage.getItem('jwtToken');

      // Prepare the data to send to the server
      const attendanceData = {
        date: new Date().toISOString().split('T')[0], // Get today's date
        students: students.filter(student => student.present).map(student => student.id),
      };

      // Replace with your backend API endpoint
      const response = await axios.post('http://your-api-url/attendance', attendanceData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        Alert.alert('Attendance marked successfully');
      } else {
        Alert.alert('Failed to mark attendance');
      }
    } catch (error) {
      console.error('Error marking attendance:', error);
      Alert.alert('Failed to mark attendance');
    }
  };

  const toggleAttendance = (index) => {
    const updatedStudents = [...students];
    updatedStudents[index].present = !updatedStudents[index].present;
    setStudents(updatedStudents);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mark Attendance</Text>
      {students.map((student, index) => (
        <TouchableOpacity key={student.id} style={styles.studentItem} onPress={() => toggleAttendance(index)}>
          <Text style={styles.studentInfo}>
            {student.rollno} - {student.name}
          </Text>
          <Text style={styles.attendanceStatus}>{student.present ? 'Present' : 'Absent'}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.button} onPress={handleAttendance}>
        <Text style={styles.buttonText}>Submit Attendance</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3b3b66',
  },
  studentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: '#3b3b66',
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
    backgroundColor:'#cdcddb',

  },
  studentInfo: {
    fontSize: 16,
    fontWeight: '400',
    color:'#3b3b66',

  },
  attendanceStatus: {
    fontSize: 16,
    fontWeight: '400',
    color: '#555',
  },
  button: {
    backgroundColor: '#3b3b66',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    width: '50%',
  },
  buttonText: {
    color: '#cdcddb',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default BSCS;
