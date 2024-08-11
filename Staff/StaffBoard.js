import React from 'react'
import { ImageBackground, SafeAreaView,  StyleSheet, Text, TouchableOpacity, View } from 'react-native'

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
        <Text style={styles.text}>Welcome to the LSIT Staff Board !</Text>
        <View style={styles.box}>
          <View style={styles.inner}>
            <TouchableOpacity onPress={() => navigation.navigate('ClassAttendance')}>
                <Text style={styles.button}>Class Attendance</Text>
            </TouchableOpacity>
          </View>  
        </View>

        <View style={styles.box}>
          <View style={styles.inner}>
          <TouchableOpacity onPress={() => navigation.navigate('StaffAccount')} >
                <Text style={styles.button}>Account </Text>
            </TouchableOpacity>
          </View>  
        </View>
        

        <View style={styles.box}>
          <View style={styles.inner}>
          <TouchableOpacity onPress={() => navigation.navigate('Subject')} >
                <Text style={styles.button}>Subject </Text>
            </TouchableOpacity>
          </View>  
        </View>

        <View style={styles.box}>
          <View style={styles.inner}>
          <TouchableOpacity onPress={() => navigation.navigate('JobListing')} >
                <Text style={styles.button}>Jobs</Text>
            </TouchableOpacity>
          </View>  
        </View>
       </View>
     
    )
  }

const StaffBoard = ({navigation}) => {
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
    },
    box:{
       // backgroundColor:'yellow',
        height:'50%',
        width:'50%',
        padding:5,
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
        fontSize:15,
        textAlign:'center',
        marginTop:55, 
       // backgroundColor:'#3b3b66',  
        height:'60%',
    },
    text:{
     marginHorizontal:'20%',
      color:"#3b3b66",
      fontWeight:'500',
      marginBottom:10,
    },
    staffIdText:{
       color:'#8c8c9f',
       fontWeight:'600',
       textAlign:'center',
    }
})

export default StaffBoard