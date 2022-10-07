import React from 'react'
import { Text, Button, SafeAreaView } from 'react-native'
import { NavigationProp, ParamListBase } from '@react-navigation/native'

type HomeProps = {
  navigation: NavigationProp<ParamListBase>
}

const Home = ({ navigation }: HomeProps) => {
  return (
    <SafeAreaView>
      <Text>Home</Text>
    </SafeAreaView>
  )
}

export default Home
