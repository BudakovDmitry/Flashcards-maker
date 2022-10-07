import React from 'react'
import { NavigationProp, ParamListBase } from '@react-navigation/native'
import { SafeAreaView, Text, Button } from 'react-native'

type WordsProps = {
  navigation: NavigationProp<ParamListBase>
}

const Words = ({ navigation }: WordsProps) => {
  return (
    <SafeAreaView>
      <Text>Words</Text>
      <Button title="Click" onPress={() => navigation.navigate('NewWords')} />
    </SafeAreaView>
  )
}

export default Words
