import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { Icon } from 'react-native-elements'


import SuMiktar from "../screens/SuMiktar"
import Uyku from "../screens/Uyku"

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="SuMiktar" component={SuMiktar} options={{
          tabBarLabel: 'SuMiktar',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="drop" size={24} color="#517fa4" />
          ),
        }}/>
          <Tab.Screen name="Uyku" component={Uyku}  options={{
          tabBarLabel: 'Uyku',
          tabBarIcon: ({ color, size }) => (
            <Icon
            name='moon'
            type='feather'
            color='#517fa4'
          />
          ),
        }}/>

</Tab.Navigator>

  );

}