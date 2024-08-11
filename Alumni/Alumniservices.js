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
        <Text style={styles.caption}>Student Services Through Our Portal App.</Text>

        <View style={styles.box}>
          <View style={styles.inner}>
          <TouchableOpacity onPress={() => navigation.navigate('Jobs')}>
                <Text style={styles.button}>Career services</Text>
            </TouchableOpacity>
          </View>  
        </View>

        <View style={styles.box}>
          <View style={styles.inner}>
          <TouchableOpacity onPress={() => navigation.navigate('AlumniChatbox')}>
                <Text style={styles.button}>Communication</Text>
            </TouchableOpacity>
          </View>  
        </View>

        <View style={styles.box}>
          <View style={styles.inner}>
          <TouchableOpacity onPress={() => navigation.navigate('AlumniAccount')}>
                <Text style={styles.button}>Account</Text>
            </TouchableOpacity>
          </View>  
        </View>
      </View>
    )
  }


const Alumniservices = ({navigation}) => {
  return (
    <SafeAreaView>
        <Header />
        <Boxes  navigation={navigation} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      
    },
    header:{
        backgroundColor:'yellow',
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
        justifyContent:'center',
        marginHorizontal:'20%',
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
        color:'#cdcddb',
        fontSize:16,
        textAlign:'center',
        marginTop:50, 
       // backgroundColor:'#3b3b66',  
        height:'60%',
        fontWeight:'500',
    }
})

export default Alumniservices