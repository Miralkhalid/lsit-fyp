import React, { useState } from "react";
import { ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Signup= ({navigation}) =>{

  const [id, setId] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  
  return (
    <View style={styles.container}>
        <ScrollView>
      <ImageBackground source={require('./assets/design.png')} resizeMode="cover" style={{height:"105%", width:"100%"}}>
      <Text style={styles.text}>SignUp To Join Us!</Text>
      <View style={styles.form}>
        <Text style={styles.formtext}>Student Id</Text>
        <TextInput style={styles.TextInput} 
        value={id}
        onChangeText={text =>setId(text)} />
        <Text style={styles.formtext}>Student Name</Text>
        <TextInput style={styles.TextInput} 
            value={name}
            onChangeText={text =>setName(text)} />
        <Text style={styles.formtext}>Email</Text>
        <TextInput style={styles.TextInput} 
            value={email}
            onChangeText={text =>setEmail(text)} />
        <Text style={styles.formtext}>Password</Text>
        <TextInput style={styles.TextInput} 
            value={password}
            onChangeText={text =>setPassword(text)} />
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.button}>Submit</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      height:'100%',
      backgroundColor:'white',
  },
  text:{
     textAlign:'center',
     marginTop:200,
     fontSize:18,
     fontStyle:'bold',
     color:'#3b3b66',
  },
  form:{
    marginHorizontal:50,
  },
  TextInput:{
    borderColor:'#3b3b66',
    borderWidth:1,
    borderRadius:5,
    color:'#8c8c9f',
  },
  formtext:{
    color:'#3b3b66',
    marginTop:15,
    fontSize:15
  },
  button:{
    backgroundColor:'#8c8c9f',
    width:150,
    padding:15,
    textAlign:'center',
    marginHorizontal:70,
    borderRadius:5,
    marginTop:20,
    color:'#cdcddb',
    fontStyle:'bold',
  }
})
export default Signup