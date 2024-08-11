import React from 'react'
import {ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

  const Boxes = ({navigation}) => {
    return (
     <View style={styles.container}>
        <View style={styles.box}>
           <View style={styles.inner}>
              <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('BSIT')}>
                <Text style={styles.btn}>BSIT</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('BSCS')}>
                <Text style={styles.btn} >BSCS</Text>
              </TouchableOpacity>
          </View>
        </View>
     </View>
    )
  }


const ClassAttendance= ({navigation}) => {
  return (
    <SafeAreaView>
        <Boxes navigation={navigation} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
      container:{
       backgroundColor:'white',
        height:'100%',
        width:'100%',
        // padding:5,
      },
      box:{
        flex:1,
       // backgroundColor:'yellow',
        height:'100%',
        flexDirection:'column',
        flexWrap:'wrap',
        padding:5,
      },
      inner:{
       // backgroundColor:'pink',
        height:'100%',
        width:'100%',
        justifyContent:'center',
        padding:10,      },
      btn:{
        fontSize:15,
        backgroundColor:'#3b3b66',
        marginTop:10,
        // width:'105%',
        padding:50,
        textAlign:'center',
        color:'white',
        borderRadius:10,
      },
      touch:{
        marginHorizontal:'25%',
      }
  
})

export default ClassAttendance