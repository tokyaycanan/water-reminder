import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {NavigationContainer} from '@react-navigation/native';


import Home from "../screens/Home";
import Logout from "../screens/Logout";
import Kayit from '../screens/Kayit';
import Login from '../screens/Login';
import SuMiktar from "../screens/SuMiktar"
import deneme from '../screens/Deneme';
import ForgotPassword from '../screens/ForgotPassword';



const Stack = createStackNavigator();




const AppNavigationContainer  = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" headerMode="none">
      
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Kayit" component={Kayit} />
      <Stack.Screen name="Logout" component={Logout} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="deneme" component={deneme} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />



    </Stack.Navigator>
    </NavigationContainer>
  );
};


export default AppNavigationContainer  ;