import React from 'react'
import { ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
const Header = () => {
    return (
      <View style={styles.header}>
        <ImageBackground source={require('./campus.png')} resizeMode='cover' style={{height:"100%", width:"100%"}}>
          </ImageBackground>
      </View>
    )
  }

  const Boxes = ({navigation}) => {
    return (
      <View style={styles.Boxcontainer}>
        <Text style={styles.caption}>Your academic journey at your fingertips.🎓</Text>

        <View style={styles.box}>
          <View style={styles.inner}>
          <TouchableOpacity onPress={() => navigation.navigate('AlumniGrade')}>
                <Text style={styles.button}>Grades</Text>
            </TouchableOpacity>
          </View>  
        </View>

         <View style={styles.box}>
          <View style={styles.inner}>
          <TouchableOpacity onPress={() => navigation.navigate('Alumniservices')}>
                <Text style={styles.button}>Student Services</Text>
            </TouchableOpacity>
          </View>  
        </View>

        <View style={styles.box}>
          <View style={styles.inner}>
          <TouchableOpacity  onPress={() => navigation.navigate('Fee')}>
                <Text style={styles.button}>Fee Details</Text>
            </TouchableOpacity>
          </View>  
        </View>
       </View>
    )
  }


const AlumniDB = ({navigation}) => {
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
    },
    box:{
       // backgroundColor:'yellow',
        height:'50%',
        width:'60%',
        padding:5,
        justifyContent:'center',
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
        marginTop:45, 
       // backgroundColor:'#3b3b66',  
        height:'60%',
    }
})

export default AlumniDB