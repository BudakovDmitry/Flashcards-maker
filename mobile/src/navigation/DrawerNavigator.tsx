import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../screens/Home'
import Words from '../screens/Words'
import { NavigationContainer } from '@react-navigation/native'
import CustomDrawer from '../components/CustomDrawer'
import Settings from '../screens/Settings'

import Ionicons from 'react-native-vector-icons/Ionicons'
import Statistics from '../screens/Statistics'
import WordsNavigation from './WordsNavigation'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
          drawerLabelStyle: { marginLeft: -15 },
          drawerActiveTintColor: '#1a2644',
          drawerInactiveTintColor: '#4c576f',
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="home-outline" size={22} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="Words"
          component={WordsNavigation}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="library-outline" size={22} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="Statistics"
          component={Statistics}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="podium-outline" size={22} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={Settings}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="cog-outline" size={22} color={color} />
            ),
            headerShown: false,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default DrawerNavigator
