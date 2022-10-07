import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NewWords from '../screens/NewWords'

const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="NewWords" component={NewWords} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
