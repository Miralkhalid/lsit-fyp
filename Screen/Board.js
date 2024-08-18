import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Header = () => {
  return (
        <View style={styles.header}>
            <Image source={require('./campus.png')} style={{ height: "100%", width: "100%" }}></Image>
        </View>
    );
};

const Boxes = ({ navigation }) => {
    return (
        <View style={styles.Container}>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <TouchableOpacity onPress={() => navigation.navigate('CourseRegistration')}>
                        <Text style={styles.button}>Courses</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <TouchableOpacity onPress={() => navigation.navigate('Academic')}>
                        <Text style={styles.button}>Academic Services</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <TouchableOpacity onPress={() => navigation.navigate('AdminAccount')}>
                        <Text style={styles.button}>Account</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <TouchableOpacity onPress={() => navigation.navigate('Service')}>
                        <Text style={styles.button}>Student Services</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <TouchableOpacity onPress={() => navigation.navigate('StudentInfo')}>
                        <Text style={styles.button}>Students</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <TouchableOpacity onPress={() => navigation.navigate('AddStaff')}>
                        <Text style={styles.button}>Staff</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const Board = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Header  navigation={navigation} />
            <Boxes navigation={navigation} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: '35%',
        justifyContent: 'center',
    },
    notification:{
      backgroundColor:'#3b3b66',
      padding:10,
      marginTop:15,
        },
        touch:{
          textAlign:'right',
          color:'white',
          padding:5,
        },
    Container: {
        height: '50%',
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 15,
        marginVertical: 5,
    },
    box: {
        height: '50%',
        width: '50%',
        padding: 5,
        marginTop: 5,
    },
    inner: {
        flex: 1,
        backgroundColor: '#3b3b66',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
    },
    menuContainer: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        // padding: 10,

    },
    list:{
      backgroundColor:'#cdcddb',
      // height:'60%',
    }
});

export default Board;
