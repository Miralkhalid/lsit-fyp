import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Attendance = () => {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const token = await AsyncStorage.getItem('jwtToken');
        const studentId = await AsyncStorage.getItem('studentId'); // Assuming studentId is stored in AsyncStorage
        const response = await axios.get(`http://10.0.2.2:8000/api/attendance/${studentId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setAttendance(response.data);
      } catch (error) {
        console.error('Error fetching attendance:', error);
      }
    };

    fetchAttendance();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.subject}>{item.subject.name}</Text>
      <Text style={styles.attendance}>{item.present ? 'Present' : 'Absent'}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Attendance</Text>
      <FlatList
        data={attendance}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  subject: {
    fontSize: 18,
  },
  attendance: {
    fontSize: 18,
  },
});

export default Attendance;
