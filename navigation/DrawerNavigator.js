import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from './TabNavigator';

import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import Logout from "../screens/Logout"
const Drawer = createDrawerNavigator();


export default function DrawerNavigator() {
  return (
      <Drawer.Navigator >
          
        <Drawer.Screen name="SuMiktar" component={TabNavigator} options={{
          drawerLabel: 'SuMiktar',
          drawerIcon: ({ color, size }) => (
            <Entypo name="drop" size={24} color="#517fa4" />

          ),
        }}/>
        <Drawer.Screen name="Logout" component={Logout} options={{
          drawerLabel: 'Logout',
          drawerIcon: ({ color, size }) => (
            <AntDesign name="team" size={24} color="#517fa4" />
          ),
        }}/>
        
      </Drawer.Navigator>



  );
}