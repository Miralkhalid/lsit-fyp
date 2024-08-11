import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity, TextInput,StyleSheet } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UploadGrades = () => {
  const [file, setFile] = useState('');
  const [studentId, setStudentId] = useState(''); // Add studentId state
  const [uploading, setUploading] = useState(false);

  const handleFilePickAndUpload = async () => {
    try {
      const doc = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      console.log('Selected document:', doc[0]);
      setFile([doc[0]]); // Wrap the document in an array

      const formData = new FormData();
      formData.append('file', {
        uri: doc[0].uri,
        type: doc[0].type,
        name: doc[0].name,
      });
      formData.append('student_id', studentId); // Append student_id

      console.log('FormData:', formData);

      const token = await AsyncStorage.getItem('jwtToken');
      setUploading(true); // Set uploading state to true

      const response = await axios.post('http://192.168.0.104:8000/api/upload/grades', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Server response:', response);
      console.log('Server response data:', response.data);

      if (response.status === 200 && response.data.message === 'File uploaded successfully') {
        Alert.alert('Success', 'File uploaded successfully');
        setFile([]); // Clear file after upload
      } else {
        Alert.alert('Error', response.data.message || 'Upload failed, please try again');
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('Canceled');
      } else {
        console.error('Upload error:', err.response ? err.response.data : err.message);
        Alert.alert('Error', 'Failed to pick or upload the file');
      }
    } finally {
      setUploading(false); // Set uploading state to false
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter id"
        value={studentId}
        onChangeText={setStudentId}
        keyboardType="numeric"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleFilePickAndUpload}
        disabled={file.length > 0 || uploading}
      >
        <Text style={styles.buttonText}>{uploading ? 'Uploading...' : 'Select and Upload'}</Text>
      </TouchableOpacity>
      {file.length > 0 && <Text>Ready to Upload: {file[0].name}</Text>}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#3b3b66',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '50%',
    marginHorizontal: '25%',
    marginTop: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default UploadGrades;
