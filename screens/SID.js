import { View, Text, ImageBackground, StyleSheet, FlatList, } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SID = () => {
  const [student_card, setStudentCard] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
      handleCard();
  }, []);

  const handleCard = async () => {
      try {
          const response = await axios.get('http://192.168.0.106:8000/api/student/get-card-detail/6');
         if (response.data && response.data.data && response.data.data.data) {
              console.log(response.data.data.data);
              setStudentCard(response.data.data.data);
          }
      } catch (error) {
          console.error('Error fetching details:', error);
          setError(error.message);
      }
  };

    const renderItem = ({ item }) => (
        <View style={styles.CardItem}>
            <Text style={styles.style}><Text style={{fontWeight:'700', color:'#cdcddb'}}>Name: </Text>{item.name}</Text>
            <Text style={styles.style}><Text style={{fontWeight:'700', color:'#cdcddb'}}>Email: </Text>{item.email}</Text>
            <Text style={styles.style}><Text style={{fontWeight:'700', color:'#cdcddb'}} >PhoneNo: </Text>{item.phone_no}</Text>
            <Text style={styles.style}><Text style={{fontWeight:'700', color:'#cdcddb'}}>Address: </Text>{item.address}</Text>
            <Text style={styles.style}><Text style={{fontWeight:'700', color:'#cdcddb'}}>Student Id: </Text>{item.student_id}</Text>
        </View>
      
    );

  return (
    <View style={styles.container}>
    {error ? (
        <Text style={styles.error}>Error: {error}</Text>
    ) : (
        <FlatList
            data={student_card}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
        />
      
    )}
</View>
  );
};

const styles = StyleSheet.create({
  container: {
  //  flex: 1,
   padding: 10,
   height:'100%',
    backgroundColor: '#fff',
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
  //  marginTop: 20,
},
});


export default SID;
