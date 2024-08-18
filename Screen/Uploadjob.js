import React from 'react'
import { ImageBackground, SafeAreaView,StyleSheet, Text, TouchableOpacity, View } from 'react-native'


  const Boxes = ({navigation}) => {
    return (
      <View style={styles.container}>
      <View style={styles.Container}>
        <View style={styles.box}>
          <View style={styles.inner}>
            <TouchableOpacity onPress={() => navigation.navigate('Jobupload')}>
                <Text style={styles.button}>Create Job</Text>
            </TouchableOpacity>
          </View>  
        </View>

        <View style={styles.box}>
          <View style={styles.inner}>
          <TouchableOpacity onPress={() => navigation.navigate('JobListing')} >
                <Text style={styles.button}>Job Listing</Text>
            </TouchableOpacity>
          </View>  
        </View>
        </View>
       </View>
    )
  }

const Uploadjob = ({navigation}) => {
  return (
    <SafeAreaView>
        <Boxes  navigation={navigation}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor:'white',
      height:'100%',
    },
    Container:{
      //backgroundColor:'red',
      height:'50%',
      width:'100%',
      flexDirection:'row',
      flexWrap:'wrap',
      padding:15,
      marginVertical:'40%',
    
    },
    box:{
       // backgroundColor:'yellow',
        height:'50%',
        width:'60%',
        padding:5,
        marginTop:5,
        marginHorizontal:'20%',
    },
    inner:{
        flex:1,
        backgroundColor:'#3b3b66',
        borderRadius:10,
    },
    caption:{
        color:'#3b3b66',
        fontSize:16,
        textAlign:'center',
        marginLeft:30,
        padding:5,
        fontVariant:'700',
    },
    button:{
        color:'#cdcddb',
        fontSize:15,
        textAlign:'center',
        marginTop:60, 
       // backgroundColor:'#3b3b66',  
        height:'60%',
    }
})

export default Uploadjob