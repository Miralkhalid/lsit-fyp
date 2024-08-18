import React , {useState} from 'react'
import { Image, SafeAreaView,StyleSheet, Text, TouchableOpacity, View, Modal, ActivityIndicator } from 'react-native'

  const Boxes = () => {
    const [loading, setLoading] = useState(false);

    // const handleNavigation = () => {
    //   setLoading(true);
    //   setTimeout(() => {
    //     setLoading(false);
    //     // navigation.navigate(scre);
    //   }, 1000); // Simulate a delay for the loader, replace with actual navigation delay
    // };
  
    return (
      
      <View style={styles.Boxcontainer}>
        <Image source={require('./download.png')} style={{height:'15%', width:'30%', marginHorizontal:'33%', marginTop:'5%', marginBottom:'5%'}}></Image>
     
         <Text style={styles.caption}>You can create and approve courses here ! </Text>
         <View style={styles.horizontal}></View>
         <View style={styles.box}>
          <View style={styles.inner}>
            <TouchableOpacity onPress={() => navigation.navigate('Createcourse')}>
                <Text style={styles.button}>Create Courses</Text>
            </TouchableOpacity>
          </View>  
        </View>
        <View style={styles.box}>
        <View style={styles.inner}>
        <TouchableOpacity onPress={() => navigation.navigate('CourseListing')}>
                <Text style={styles.button}>Course list</Text>
            </TouchableOpacity>
          </View>  
        </View>

        <View style={styles.box}>
          <View style={styles.inner}>
          <TouchableOpacity onPress={() => navigation.navigate('Approvecourse')} >
                <Text style={styles.button}>Approval Courses</Text>
            </TouchableOpacity>
          </View>  
        </View>
  
        {/* <Modal
        animationType="fade"
        transparent={true}
        visible={loading}
        onRequestClose={() => {
          setLoading(!loading);
        }}
      > */}
        {/* <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <ActivityIndicator size="large" color="#3b3b66" />
            <Text style={styles.loadingText}>Loading...</Text>
          </View>
        </View>
      </Modal> */}
       </View>
    )
  }

const CourseRegistration = ({navigation}) => {
  return (
    <SafeAreaView>
        <Boxes  navigation={navigation}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    Boxcontainer:{
      backgroundColor:'white',
      height:'100%',
      width:'100%',
      flexDirection:'row',
      flexWrap:'wrap',
      padding:15,
      justifyContent:'center',
     // marginVertical:'20%',
    },
    box:{
       // backgroundColor:'yellow',
        height:'20%',
        width:'60%',
        padding:5,
        //marginTop:5,
        marginHorizontal:'20%',
    },
    inner:{
        flex:1,
        backgroundColor:'#3b3b66',
        borderRadius:10,
    },
    caption:{
        color:'#3b3b66',
        fontSize:14,
        textAlign:'center',
        padding:5,
        fontVariant:'600',
    },
    button:{
        color:'white',
        fontSize:14,
        textAlign:'center',
        marginTop:55, 
       // backgroundColor:'#3b3b66',  
       // height:'60%',
    },
    horizontal: {
      marginTop: 15,
      backgroundColor: 'black',
      marginHorizontal:'15%',
      width: 250,
      height: 1,
      marginBottom:'5%',
    },
    modalBackground: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
      width: 150,
      height: 150,
      // backgroundColor: 'white',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loadingText: {
      marginTop: 10,
      color: '#cdcddb',
      fontWeight: 'bold',
    },
})

export default CourseRegistration