import { View, Text } from 'react-native'
import React from 'react'

const UploadDocs = () => {
  return (
    <View>
      <Text>UploadDocs</Text>
    </View>
  )
}

export default UploadDocs
 // import React, { useState } from 'react';
// // import { View, Text, Alert, TouchableOpacity, StyleSheet } from 'react-native';
// // import DocumentPicker from 'react-native-document-picker';
// // import axios from 'axios';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // import Pdf from 'react-native-pdf'; // Import react-native-pdf

// // const UploadDocs = ({ pdfUri, onFileUploaded }) => {
// //   const [file, setFile] = useState([]);
// //   const [uploading, setUploading] = useState(false);

// //   const handleFilePickAndUpload = async () => {
// //     try {
// //       const doc = await DocumentPicker.pick({
// //         type: [DocumentPicker.types.pdf],
// //       });
// //       console.log('Selected document:', doc[0]);
// //       setFile([doc[0]]); // Wrap the document in an array

// //       const formData = new FormData();
// //       formData.append('file', {
// //         uri: doc[0].uri,
// //         type: doc[0].type,
// //         name: doc[0].name,
// //       });
// //       console.log('FormData:', formData);

// //       const token = await AsyncStorage.getItem('jwtToken');
// //       setUploading(true); // Set uploading state to true

// //       const response = await axios.post('http://10.0.2.2:8000/api/upload/fees', formData, {
// //         headers: {
// //           'Content-Type': 'multipart/form-data',
// //           Authorization: `Bearer ${token}`,
// //         },
// //       });

// //       console.log('Server response:', response);
// //       console.log('Server response data:', response.data);

// //       if (response.status === 200 && response.data.message === 'File uploaded successfully') {
// //         Alert.alert('Success', 'File uploaded successfully');
// //         if (onFileUploaded) {
// //           onFileUploaded(doc[0].name); // Call callback to update the file name in the parent component
// //         }
// //         setFile([]); // Clear file after upload
// //       } else {
// //         Alert.alert('Error', response.data.message || 'Upload failed, please try again');
// //       }
// //     } catch (err) {
// //       if (DocumentPicker.isCancel(err)) {
// //         console.log('Canceled');
// //       } else {
// //         console.error('Upload error:', err);
// //         Alert.alert('Error', 'Failed to pick or upload the file');
// //       }
// //     } finally {
// //       setUploading(false); // Set uploading state to false
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       {pdfUri ? (
// //         <Pdf
// //           source={{ uri: pdfUri, cache: true }}
// //           onLoadComplete={(numberOfPages, filePath) => {
// //             console.log(`number of pages: ${numberOfPages}`);
// //           }}
// //           onPageChanged={(page, numberOfPages) => {
// //             console.log(`current page: ${page}`);
// //           }}
// //           onPageSingleTap={() => {
// //             console.log('single tap');
// //           }}
// //           onError={(error) => {
// //             console.log(error);
// //           }}
// //           onPressLink={(uri) => {
// //             console.log(`Link pressed: ${uri}`);
// //           }}
// //           style={styles.pdf}
// //         />
// //       ) : (
// //         <View style={styles.uploadContainer}>
// //           <TouchableOpacity
// //             style={styles.button}
// //             onPress={handleFilePickAndUpload}
// //             disabled={file.length > 0 || uploading}
// //           >
// //             <Text style={styles.buttonText}>{uploading ? 'Uploading...' : 'Select and Upload'}</Text>
// //           </TouchableOpacity>
// //           {file.length > 0 && <Text>Ready to Upload: {file[0].name}</Text>}
// //         </View>
// //       )}
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     marginVertical: '10%',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     flex: 1,
// //   },
// //   uploadContainer: {
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   button: {
// //     backgroundColor: '#3b3b66',
// //     padding: 15,
// //     borderRadius: 10,
// //     alignItems: 'center',
// //     width: '50%',
// //     marginHorizontal: '25%',
// //     marginTop: 5,
// //   },
// //   buttonText: {
// //     color: '#fff',
// //     fontWeight: 'bold',
// //   },
// //   pdf: {
// //     flex: 1,
// //     width: '100%',
// //   },
// // });

// // export default UploadDocs;


// import React, { useState } from 'react';
// import { View, Text, Alert, TouchableOpacity, StyleSheet } from 'react-native';
// import DocumentPicker from 'react-native-document-picker';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const UploadDocs = ({ pdfUri, onFileUploaded }) => {
//   const [file, setFile] = useState([]);
//   const [uploading, setUploading] = useState(false);

//   const handleFilePickAndUpload = async () => {
//     try {
//       const doc = await DocumentPicker.pick({
//         type: [DocumentPicker.types.pdf],
//       });
//       console.log('Selected document:', doc[0]);
//       setFile([doc[0]]); // Wrap the document in an array

//       const formData = new FormData();
//       formData.append('file', {
//         uri: doc[0].uri,
//         type: doc[0].type,
//         name: doc[0].name,
//       });
//       console.log('FormData:', formData);

//       const token = await AsyncStorage.getItem('jwtToken');
//       setUploading(true); // Set uploading state to true

//       const response = await axios.post('http://10.0.2.2:8000/api/upload/fees', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       console.log('Server response:', response);
//       console.log('Server response data:', response.data);

//       if (response.status === 200 && response.data.message === 'File uploaded successfully') {
//         Alert.alert('Success', 'File uploaded successfully');
//         if (onFileUploaded) {
//           onFileUploaded(doc[0].name); // Call callback to update the file name in the parent component
//         }
//         setFile([]); // Clear file after upload
//       } else {
//         Alert.alert('Error', response.data.message || 'Upload failed, please try again');
//       }
//     } catch (err) {
//       if (DocumentPicker.isCancel(err)) {
//         console.log('Canceled');
//       } else {
//         console.error('Upload error:', err);
//         Alert.alert('Error', 'Failed to pick or upload the file');
//       }
//     } finally {
//       setUploading(false); // Set uploading state to false
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {pdfUri ? (
//         // Uncomment the following line if WebView is required
//         <Text>PDF View Component Placeholder</Text>
//       ) : (
//         <View style={styles.uploadContainer}>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={handleFilePickAndUpload}
//             disabled={file.length > 0 || uploading}
//           >
//             <Text style={styles.buttonText}>{uploading ? 'Uploading...' : 'Select and Upload'}</Text>
//           </TouchableOpacity>
//           {file.length > 0 && <Text>Ready to Upload: {file[0].name}</Text>}
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginVertical: '10%',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   uploadContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   button: {
//     backgroundColor: '#3b3b66',
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     width: '50%',
//     marginHorizontal: '25%',
//     marginTop: 5,
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });

// export default UploadDocs;

