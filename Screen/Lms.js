import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Linking } from 'react-native';

const Lms = () => {
  const handlePress = () => {
    Linking.openURL('http://lms.lsit.xnrel.com:8070/portal?sakai.session=1152e495-7776-4ee6-a9d6-58f470fd13f9');
  };

  return (
    <View style={styles.container}>
      <Image source={require('./download.png')} style={{height:'16%', width:'30%', marginVertical:'10%'}}></Image>
      <Text style={styles.title}>LMS</Text>
      <View style={styles.horizontal}></View>

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Go to Website</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
    color: '#3b3b66',
    marginVertical:'10%',
    alignItems:'center',
  },
  button: {
    backgroundColor: '#3b3b66',
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 5,
    },
  buttonText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '700',
  },
  horizontal:{
    // marginTop: 5,
    backgroundColor: 'black',
    marginHorizontal:'15%',
    width: 250,
    height: 1,
    marginBottom:'5%',  }
});

export default Lms;
