import React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationProp, ParamListBase } from '@react-navigation/native'

type HomeProps = {
  navigation: NavigationProp<ParamListBase>
}

const Home = ({ navigation }: HomeProps) => {
  return (
    <View>
      <Text>Home</Text>
      <Button title="click" onPress={() => navigation.navigate('Words')} />
    </View>
  )
}

export default Home
