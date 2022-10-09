import React, { useState } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../screens/Home'
import { NavigationContainer } from '@react-navigation/native'
import CustomDrawer from '../components/CustomDrawer'
import Settings from '../screens/Settings'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Ionicons from 'react-native-vector-icons/Ionicons'
import Statistics from '../screens/Statistics'
import WordsNavigator from './WordsNavigator'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'

const Drawer = createDrawerNavigator()
const Stack = createNativeStackNavigator()

const DrawerNavigator = () => {
  const [isSignedIn, setIsSignedIn] = useState(true)

  return (
    <NavigationContainer>
      {isSignedIn ? (
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
            component={WordsNavigator}
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
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  )
}

export default DrawerNavigator
