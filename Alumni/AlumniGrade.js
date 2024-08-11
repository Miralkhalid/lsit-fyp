import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'


const AlumniGrade = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./download.png')} 
      style={{height:'20%', width:'35%', marginHorizontal:'32%', marginTop:'10%'}}></Image>
      <Text style={styles.caption}>LSIT upload your Semester wise result , you can now check from here. </Text>
      
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
     backgroundColor:'white',
     height:'100%',
     width:'100%',
  },
caption:{
  marginVertical:'10%',
  color:'#3b3b66',
  fontSize:16,
  textAlign:'center',
  marginLeft:30,
  padding:5,
  fontVariant:'700',
},
})
export default AlumniGrade