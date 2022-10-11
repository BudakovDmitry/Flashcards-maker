import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NewWords from '../screens/NewWords'
import Words from '../screens/Words'
import AddWordButton from '../components/AddWordButton'

const Stack = createNativeStackNavigator()

const WordsNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Words"
          component={Words}
          options={({ navigation }) => ({
            headerRight: () => <AddWordButton navigation={navigation} />,
          })}
        />
        <Stack.Screen
          name="NewWords"
          component={NewWords}
          options={{ title: 'New word' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default WordsNavigator
