import React from 'react'
import { ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Header = () => {
    return (
      <View style={styles.header}>
        <ImageBackground source={require('./campus.png')} style={{height:"100%", width:"100%"}}>
          </ImageBackground>
      </View>
    )
  }

  const Boxes = ({navigation}) => {
    return (
      <View style={styles.Boxcontainer}>
        
        <View style={styles.box}>
          <View style={styles.inner}>
            <TouchableOpacity onPress={() => navigation.navigate('StudentResult')}>
                <Text style={styles.button}>Upload Grades</Text>
            </TouchableOpacity>
          </View>  
        </View>

        <View style={styles.box}>
          <View style={styles.inner}>
          <TouchableOpacity onPress={() => navigation.navigate('OfferingAttendance')} >
                <Text style={styles.button}>Offering Attendance </Text>
            </TouchableOpacity>
          </View>  
        </View>

        <View style={styles.box}>
          <View style={styles.inner}>
          <TouchableOpacity onPress={() => navigation.navigate('FeeDetails')}>
                <Text style={styles.button}>Upload Fee Details</Text>
            </TouchableOpacity>
          </View>  
        </View>
      
        <View style={styles.box}>
          <View style={styles.inner}>
          <TouchableOpacity onPress={() => navigation.navigate('Lms')}>
                <Text style={styles.button}>LMS</Text>
            </TouchableOpacity>
          </View>  
        </View>

       </View>
    )
  }


const Academic = ({navigation}) => {
  return (
    <SafeAreaView>
        <Header />
        <Boxes  navigation={navigation}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      
    },
    header:{
        //backgroundColor:'yellow',
        height:'35%',
        justifyContent:'center',

    },
    Boxcontainer:{
      //backgroundColor:'red',
      height:'50%',
      width:'100%',
      flexDirection:'row',
      flexWrap:'wrap',
      padding:15,
      marginVertical:5,
      justifyContent:'center',
    },
    box:{
       // backgroundColor:'yellow',
        height:'50%',
        width:'50%',
        padding:5,
        marginTop:5,
        
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
        color:'white',
        fontSize:14,
        textAlign:'center',
        marginTop:55, 
       // backgroundColor:'#3b3b66',  
        height:'60%',
    }
})

export default Academic