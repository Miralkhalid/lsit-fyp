import React from "react";
import Login from "./Login";
import Dashboard from "./screens/Dashboard";
import Course from "./screens/Course";
import Registration from "./screens/Registration";
import Idcard from "./screens/Idcard";
import Idcreate from "./Screen/Idcreate.js";
import Services from "./screens/Services";
import Jobs from "./screens/Jobs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Regcourse from "./screens/Regcourse";
import Grades from "./screens/Grades";
import Fee from "./screens/Fee";
import Attendance from "./screens/Attendance";
import Alumni from "./Alumni";
import Reset from "./screens/Reset";
import Admin from "./Admin";
import OfferingAttendance from "./Screen/OfferingAttendance";
import Board from "./Screen/Board";
import CourseRegistration from "./Screen/CourseRegistration";
import LSIT from "./LSIT";
import CareerServices from "./Screen/CareerServices";
import Academic from "./Screen/Academic";
// import FeeDetails from "./Screen/FeeDetails";
import Staff from "./Staff";
import ClassAttendance from "./Staff/ClassAttendance";
import StaffBoard from "./Staff/StaffBoard";
import StaffAccount from "./Staff/StaffAccount";
import Account from "./screens/Account";
import UploadGrades from "./Screen/UploadGrades";
import AdminAccount from "./Screen/AdminAccount";
import Communication from "./screens/Communication.js";
import Service from "./Screen/Service.js";
import Lms from "./Screen/Lms.js";
import Uploadjob from "./Screen/Uploadjob.js";
import Chatbox from "./Screen/Chatbox.js";
import Subject from "./Staff/Subject.js";
import SID from "./screens/SID.js";
import StudentResult from "./Screen/StudentResult.js";
import AlumniAccount from "./Alumni/AlumniAccount.js";
import AlumniGrade from "./Alumni/AlumniGrade.js";
import Jobupload from "./Screen/Jobupload.js";
import JobListing from "./Screen/JobListing.js";
import Createcourse from "./Screen/Createcourse.js";
import CourseListing from "./Screen/CourseListing.js";
import Approvecourse from "./Screen/Approvecourse.js";
import UploadDocs from "./Screen/UploadDocs.js";
import StudentInfo from "./Screen/StudentInfo.js";
import StudentRecord from "./Screen/StudentRecord.js";
import AlumniDB from "./Alumni/AlumniDB.js";
import Alumniservices from "./Alumni/Alumniservices.js";
import AlumniChatbox from "./Alumni/AlumniChatbox.js";
import Update from "./Screen/Update.js";
import BSIT from "./Staff/BSIT.js";
import UpdateStaff from "./Screen/UpdateStaff.js";
import UpdateStaffDetail from "./Screen/UpdateStaffDetail.js";
import AddStaff from "./Screen/AddStaff.js";
import Courses from "./Screen/Courses.js";
import BSCS from "./Staff/BSCS.js";
import LibraryInfo from "./Screen/LibraryInfo.js";


const App = () =>{
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="LSIT" screenOptions={{headerShown:false}}>
    <Stack.Screen name="LSIT" component={LSIT}></Stack.Screen>
    <Stack.Screen name="Login" component={Login}></Stack.Screen>
    <Stack.Screen name="Dashboard" component={Dashboard}></Stack.Screen>
    <Stack.Screen name="Course" component={Course}></Stack.Screen>
    <Stack.Screen name="Regcourse" component={Regcourse}></Stack.Screen>
    <Stack.Screen name="Registration" component={Registration}></Stack.Screen>
    <Stack.Screen name="Jobs" component={Jobs}></Stack.Screen>
    <Stack.Screen name="Fee" component={Fee}></Stack.Screen>
    <Stack.Screen name="OfferingAttendance" component={OfferingAttendance}></Stack.Screen>
    <Stack.Screen name="Attendance" component={Attendance}></Stack.Screen>
    <Stack.Screen name="Grades" component={Grades}></Stack.Screen>
    <Stack.Screen name="Idcard" component={Idcard}></Stack.Screen>
    <Stack.Screen name="Idcreate" component={Idcreate}></Stack.Screen>
    <Stack.Screen name="Services" component={Services}></Stack.Screen>
    <Stack.Screen name="Jobs" component={Jobs}></Stack.Screen>
    <Stack.Screen name="Alumni" component={Alumni} ></Stack.Screen>
    <Stack.Screen name="Reset" component={Reset}></Stack.Screen>
    <Stack.Screen name="Admin" component={Admin}></Stack.Screen> 
    <Stack.Screen name="AdminAccount" component={AdminAccount}></Stack.Screen>
    <Stack.Screen name="Account" component={Account}></Stack.Screen>
    <Stack.Screen name="Board" component={Board}></Stack.Screen>
    <Stack.Screen name="CourseRegistration" component={CourseRegistration}></Stack.Screen>
    <Stack.Screen name="CareerServices" component={CareerServices}></Stack.Screen>
    <Stack.Screen name="Academic" component={Academic}></Stack.Screen>
    <Stack.Screen name="Staff" component={Staff}></Stack.Screen>
    <Stack.Screen name="StaffBoard" component={StaffBoard}></Stack.Screen>
    {/* <Stack.Screen name="FeeDetails" component={FeeDetails}></Stack.Screen> */}
    <Stack.Screen name="ClassAttendance" component={ClassAttendance}></Stack.Screen>
    <Stack.Screen name="StaffAccount" component={StaffAccount}></Stack.Screen>
    <Stack.Screen name="Communication" component={Communication}></Stack.Screen>
    <Stack.Screen name="Service" component={Service}></Stack.Screen>
    <Stack.Screen name="Lms" component={Lms}></Stack.Screen>
    <Stack.Screen name="Uploadjob" component={Uploadjob}></Stack.Screen>
    <Stack.Screen name="UploadGrades" component={UploadGrades}></Stack.Screen>
    <Stack.Screen name="Chatbox" component={Chatbox}></Stack.Screen>
    <Stack.Screen name="Subject" component={Subject}></Stack.Screen>
    <Stack.Screen name="SID" component={SID}></Stack.Screen>
    <Stack.Screen name="UploadDocs" component={UploadDocs}></Stack.Screen>
    <Stack.Screen name="StudentResult" component={StudentResult}></Stack.Screen>
    <Stack.Screen name="AlumniAccount" component={AlumniAccount}></Stack.Screen>
    <Stack.Screen name="AlumniGrade" component={AlumniGrade}></Stack.Screen>
    <Stack.Screen name="Alumniservices" component={Alumniservices}></Stack.Screen>
    <Stack.Screen name="AlumniDB" component={AlumniDB}></Stack.Screen>
    <Stack.Screen name="AlumniChatbox" component={AlumniChatbox}></Stack.Screen>
    <Stack.Screen name="Jobupload" component={Jobupload}></Stack.Screen>
    <Stack.Screen name="JobListing" component={JobListing}></Stack.Screen>
    <Stack.Screen name="Createcourse" component={Createcourse}></Stack.Screen>
    <Stack.Screen name="CourseListing" component={CourseListing}></Stack.Screen>
    <Stack.Screen name="Approvecourse" component={Approvecourse}></Stack.Screen>
    <Stack.Screen name="StudentInfo" component={StudentInfo}></Stack.Screen>
    <Stack.Screen name="StudentRecord" component={StudentRecord}></Stack.Screen>
    <Stack.Screen name="BSIT" component={BSIT}></Stack.Screen>
    <Stack.Screen name="BSCS" component={BSCS}></Stack.Screen>
    <Stack.Screen name="UpdateStaff" component={UpdateStaff}></Stack.Screen>
    <Stack.Screen name="AddStaff" component={AddStaff}></Stack.Screen>
    <Stack.Screen name="Update" component={Update}></Stack.Screen>
    <Stack.Screen name="UpdateStaffDetail" component={UpdateStaffDetail}></Stack.Screen>
    <Stack.Screen name="Courses" component={Courses}></Stack.Screen>
    <Stack.Screen name="LibraryInfo" component={LibraryInfo}></Stack.Screen>
   </Stack.Navigator>
   </NavigationContainer>
  )
}
export default App