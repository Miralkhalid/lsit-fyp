import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import Pdf from 'react-native-pdf';

const Grades = () => {
  // const [pdfUri, setPdfUri] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // const fetchPdf = async () => {
  //   try {
  //     const token = await AsyncStorage.getItem('jwtToken');
  //     const response = await axios.get('http://10.0.2.2:8000/api/fetch-grade/student/8', {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //       responseType: 'arraybuffer', // Get the response as binary data
  //     });

  //     const base64 = Buffer.from(response.data, 'binary').toString('base64');
  //     const uri = `data:application/pdf;base64,${base64}`;

  //     setPdfUri(uri);
  //     setLoading(false);
  //   } catch (error) {
  //     console.error('Error fetching PDF:', error);
  //     setError('Failed to fetch PDF');
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchPdf();
  // }, []);

  // if (loading) {
  //   return <ActivityIndicator size="large" color="#0000ff" />;
  // }

  // if (error) {
  //   return <Text style={styles.error}>{error}</Text>;
  // }

  return (
    <View style={styles.container}>
      <Text>hlo</Text>
      {/* {pdfUri ? (
        <Pdf
          source={{ uri: pdfUri, cache: true }}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`current page: ${page}`);
          }}
          onError={(error) => {
            console.log(error);
            setError('Failed to load PDF');
          }}
          onPressLink={(uri) => {
            console.log(`Link pressed: ${uri}`);
          }}
          style={styles.pdf}
        />
      ) : (
        <Text>No PDF available</Text>
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  pdf: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    margin: 20,
  },
});

export default Grades;
