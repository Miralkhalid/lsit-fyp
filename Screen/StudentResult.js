import React from 'react';
import { SafeAreaView, StyleSheet, Text, Image,View } from 'react-native';
import UploadGrades from './UploadGrades';

const StudentResult = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Image source={require('./download.png')} style={{height:'16%', width:'30%',marginTop:'10%', alignSelf:'center'}}></Image>
      <Text style={styles.caption}>LAHORE SCHOOL OF INNOVATION & TECHNOLOGY</Text>
      <View style={styles.horizontal}></View>
       <Text style={styles.text}>Upload Result Docs Here!</Text>
      <UploadGrades />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height:'100%',
    backgroundColor:'white',
   // justifyContent: 'center',
   // alignItems: 'center',
  },
    text: {
      textAlign: 'center',
      fontSize: 14,
      fontWeight:'500',
      color: '#3b3b66',
      // marginBottom:10,
  },
  caption:{
    alignSelf:'center',
    color:'#3b3b66',
    fontWeight:'500',
    marginTop:'10%',
    marginBottom:'10',
  },
  horizontal: {
    marginTop: 15,
    backgroundColor: 'black',
    //marginHorizontal:'15%',
    width: 250,
    height: 1,
    marginBottom:'5%',
    alignSelf:'center',
  },
  
});

export default StudentResult
