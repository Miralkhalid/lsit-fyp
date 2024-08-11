// import React, { useState } from 'react';
// import { View, TextInput, StyleSheet, ScrollView, TouchableOpacity, Text, Alert } from 'react-native';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const Idcreate = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone_no, setPhoneNo] = useState('');
//   const [address, setAddress] = useState('');
//   const [student_id, setStudentId] = useState('');

//   const createCard = async () => {
//     if (!name || !email || !phone_no || !address || !student_id) {
//       Alert.alert('Error', 'Please fill all fields');
//       return;
//     }

//     try {
//       console.log({ name, email, phone_no, address, student_id });
//       const response = await axios.post('http://10.0.2.2:8000/api/student/card-create', {
//         name,
//         email,
//         phone_no,
//         address,
//         student_id,
//       });

//       if (response.status === 200) {
//         // Store student_id in AsyncStorage
//         await AsyncStorage.setItem('student_id', student_id);
//         Alert.alert('Success', 'ID Card created successfully');
//         console.log(response.data);
//       } else {
//         throw new Error('Failed to create ID Card');
//       }
//     } catch (error) {
//       console.error('Error creating ID Card:', error);
//       Alert.alert('Error', error.response?.data?.message || 'Failed to create ID Card');
//     }
//   };

import React, { useState } from 'react';
import { View, TextInput, StyleSheet, ScrollView, TouchableOpacity, Text, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Idcreate = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone_no, setPhoneNo] = useState('');
  const [address, setAddress] = useState('');
  const [student_id, setStudentId] = useState('');

  const createCard = async () => {
    if (!name || !email || !phone_no || !address || !student_id) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    try {
      console.log({ name, email, phone_no, address, student_id });
      const response = await axios.post('http://192.168.0.106:8000/api/student/card-create', {
        // id,
        name,
        email,
        phone_no,
        address,
        student_id,
      });

      if (response.status === 200) {
        // Store id in AsyncStorage
        await AsyncStorage.setItem('student_id', student_id);
        Alert.alert('Success', 'ID Card created successfully');
        console.log(response.data);
      } else {
        throw new Error('Failed to create ID Card');
      }
    } catch (error) {
      console.error('Error creating ID Card:', error);
      Alert.alert('Error', error.response?.data?.message || 'Failed to create ID Card');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.form}>
          <Text style={styles.caption}>Enter Student Credentials Here</Text>
          <Text style={styles.text}>Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Enter name"
          />
          <Text style={styles.text}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter email"
            keyboardType="email-address"
          />
          <Text style={styles.text}>Phone No</Text>
          <TextInput
            style={styles.input}
            value={phone_no}
            onChangeText={setPhoneNo}
            placeholder="Enter phone number"
            keyboardType="phone-pad"
          />
          <Text style={styles.text}>Address</Text>
          <TextInput
            style={styles.input}
            value={address}
            onChangeText={setAddress}
            placeholder="Enter address"
          />
          <Text style={styles.text}>Student Id</Text>
          <TextInput
            style={styles.input}
            value={student_id}
            onChangeText={setStudentId}
            placeholder="Enter student ID"
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.button} onPress={createCard}>
            <Text style={styles.btntext}>Create ID Card</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  form: {
    marginVertical: '15%',
  },
  input: {
    borderColor: '#3b3b66',
    borderWidth: 1,
    marginHorizontal: '10%',
    marginTop: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#3b3b66',
    padding: 15,
    marginHorizontal: '32%',
    borderRadius: 10,
    marginTop: 10,
  },
  btntext: {
    color: '#cdcddb',
    textAlign: 'center',
    fontWeight: '500',
  },
  caption: {
    color: '#3b3b66',
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: '5%',
  },
  text: {
    marginHorizontal: 40,
    color: '#3b3b66',
    fontWeight: '500',
  },
});

export default Idcreate;


// import React, { useState } from 'react';
// import { View, TextInput, StyleSheet, ScrollView, TouchableOpacity, Text, Alert } from 'react-native';
// import axios from 'axios';

// const Idcreate = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone_no, setPhoneNo] = useState('');
//   const [address, setAddress] = useState('');
//   const [student_id, setStudentId] = useState('');

//   const createCard = async () => {
//     if (!name || !email || !phone_no || !address || !student_id) {
//       Alert.alert('Error', 'Please fill all fields');
//       return;
//     }

//     try {
//       console.log({ name, email, phone_no, address, student_id });
//       const response = await axios.post(`http://10.0.2.2:8000/api/student/card-create/${id}`, {
//         name,
//         email,
//         phone_no,
//         address,
//         student_id,
//       });

//       if (response.status === 200) {
//         await AsyncStorage.setItem('IdCard', JSON.stringify({
//           name,
//           email,
//           phone_no,
//           address,
//           student_id,
//         }));
//         Alert.alert('Success', 'ID Card created successfully');
//         console.log(response.data);
//       } else {
//         throw new Error('Failed to create ID Card');
//       }
//     } catch (error) {
//       console.error('Error creating ID Card:', error);
//       Alert.alert('Error', error.response?.data?.message || 'Failed to create ID Card');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         <View style={styles.form}>
//           <Text style={styles.caption}>Enter Student Credentials Here</Text>
//           <Text style={styles.text}>Name</Text>
//           <TextInput
//             style={styles.input}
//             value={name}
//             onChangeText={setName}
//             placeholder="Enter name"
//           />
//           <Text style={styles.text}>Email</Text>
//           <TextInput
//             style={styles.input}
//             value={email}
//             onChangeText={setEmail}
//             placeholder="Enter email"
//             keyboardType="email-address"
//           />
//           <Text style={styles.text}>Phone No</Text>
//           <TextInput
//             style={styles.input}
//             value={phone_no}
//             onChangeText={setPhoneNo}
//             placeholder="Enter phone number"
//             keyboardType="phone-pad"
//           />
//           <Text style={styles.text}>Address</Text>
//           <TextInput
//             style={styles.input}
//             value={address}
//             onChangeText={setAddress}
//             placeholder="Enter address"
//           />
//           <Text style={styles.text}>Student Id</Text>
//           <TextInput
//             style={styles.input}
//             value={student_id}
//             onChangeText={setStudentId}
//             placeholder="Enter student ID"
//             keyboardType="numeric"
//           />
//           <TouchableOpacity style={styles.button} onPress={createCard}>
//             <Text style={styles.btntext}>Create ID Card</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   form: {
//     marginVertical: '15%',
//   },
//   input: {
//     borderColor: '#3b3b66',
//     borderWidth: 1,
//     marginHorizontal: '10%',
//     marginTop: 10,
//     borderRadius: 10,
//     paddingHorizontal: 10,
//   },
//   button: {
//     backgroundColor: '#3b3b66',
//     padding: 15,
//     marginHorizontal: '32%',
//     borderRadius: 10,
//     marginTop: 10,
//   },
//   btntext: {
//     color: '#cdcddb',
//     textAlign: 'center',
//     fontWeight: '500',
//   },
//   caption: {
//     color: '#3b3b66',
//     fontWeight: '600',
//     textAlign: 'center',
//     marginVertical: '5%',
//   },
//   text: {
//     marginHorizontal: 40,
//     color: '#3b3b66',
//     fontWeight: '500',
//   },
// });

// export default Idcreate;


// import React, { useState } from 'react';
// import { View, TextInput,StyleSheet, ScrollView,TouchableOpacity, Text, Alert } from 'react-native';
// import axios from 'axios';
// // import { ScrollView } from 'react-native-gesture-handler';


// const Idcreate = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone_no, setPhoneNo] = useState('');
//   const [address, setAddress] = useState('');
//   const [student_id, setStudentId] = useState('');

//   const createCard = async () => {
//     try {   
//       console.log(
//        {
//            name,
//            email,
//            phone_no,
//            address,
//            student_id,
//        }
//       );
//            const response = await axios.post('http://10.0.2.2:8000/api/student/card-create', {
//             name: name,
//             email: email,
//             phone_no: phone_no,
//             address: address,
//             student_id: student_id,
//              });
//              if (response.status === 200) {
//             Alert.alert('Success', 'ID Card created successfully');
//               console.log( response.data);
//           } else {
//               throw new Error('Failed to create ID Card');
//           }
//       } catch (error) {
//           console.error('Error creating ID Card:', error);
//           if (error.response && error.response.data) {
//               console.error('Server response:', error.response.data);
//           }
//         //  Alert.alert('Error', 'Failed to create ID Card');
//       }
//   };
  
//   return (
//     <View style={{height:'100%', backgroundColor:'white'}}>
//       <ScrollView>
//     <View style={styles.form}>
//     <Text style={styles.caption}>Enter Student Credientials here</Text>
//       <Text style={styles.text}>Name</Text>
//       <TextInput style={styles.input} value={name} onChangeText={setName} />
//       <Text style={styles.text}>Email</Text>
//       <TextInput style={styles.input}  value={email} onChangeText={setEmail} />
//       <Text style={styles.text}>Phone No</Text>
//       <TextInput style={styles.input} value={phone_no} onChangeText={setPhoneNo} />
//       <Text style={styles.text}>Address</Text>
//       <TextInput style={styles.input} value={address} onChangeText={setAddress} />
//       <Text style={styles.text}>Student Id</Text>
//       <TextInput style={styles.input} value={student_id} onChangeText={setStudentId} />
//       <TouchableOpacity style={styles.button} onPress={createCard} >
//         <Text style={styles.btntext}> Create ID Card </Text>
//       </TouchableOpacity>
//     </View></ScrollView>
//     </View>
//   );
// }
// const styles = StyleSheet.create ({
//  text:{
//    marginHorizontal:40,
//    color:'#3b3b66',
//    fontWeight:'500',

//  },
//   form:{
//     marginVertical:'15%',
//     // backgroundColor:'white',
//  },
//   input:{
//     borderColor:'#3b3b66',
//     borderWidth:1,
//     marginHorizontal:'10%',
//     marginTop:10,
//     borderRadius:10,
//   },
//   button:{
//     backgroundColor:'#3b3b66',
//     padding:15,
//     marginHorizontal:'32%',
//     borderRadius:10,
//     marginTop:10,
//   },
//   btntext:{
//     color:'#cdcddb',
//     textAlign:'center',
//     fontWeight:'500',
//   },
//   caption:{
//     color:'#3b3b66',
//     fontWeight:'600',
//     textAlign:'center',
//     marginVertical:'5%',
//   }
// }
// ) 

// export default Idcreate