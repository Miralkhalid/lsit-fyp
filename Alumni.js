import React from "react";
import Alumniservices from "./Alumni/Alumniservices";
import AlumniDB from "./Alumni/AlumniDB";
import Jobs from "./Alumni/Jobs";
import Fee from "./Alumni/Fee";
import Grades from "./Alumni/Grades";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AlumniChatbox from "./Alumni/AlumniChatbox";

// const Stack = createNativeStackNavigator();
const Alumni = () =>{
  const Stack = createNativeStackNavigator();

  return (
    
    <Stack.Navigator initialRouteName="AlumniDB">
    <Stack.Screen name="Dashboard" component={AlumniDB}></Stack.Screen>
    <Stack.Screen name="Alumniservices" component={Alumniservices}></Stack.Screen>
    <Stack.Screen name="Jobs" component={Jobs}></Stack.Screen>
    <Stack.Screen name="Fee" component={Fee}></Stack.Screen>
    <Stack.Screen name="Grades" component={Grades}></Stack.Screen>
    <Stack.Screen name="AlumniChatbox" component={AlumniChatbox}></Stack.Screen>
    </Stack.Navigator>
  
  )
}

export default Alumni