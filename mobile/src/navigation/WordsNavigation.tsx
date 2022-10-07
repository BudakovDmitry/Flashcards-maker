import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NewWords from '../screens/NewWords'
import Words from '../screens/Words'

const Stack = createNativeStackNavigator()

const WordsNavigation = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Words"
          component={Words}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NewWords"
          component={NewWords}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default WordsNavigation
