import React from 'react'
import { SafeAreaView, Text, Button } from 'react-native'
import { NavigationProp, ParamListBase } from '@react-navigation/native'

type SignInProps = {
  navigation: NavigationProp<ParamListBase>
}

const SignIn = ({ navigation }: SignInProps) => {
  return (
    <SafeAreaView>
      <Text>SignIn</Text>
      <Button title="SignUp" onPress={() => navigation.navigate('SignUp')} />
    </SafeAreaView>
  )
}

export default SignIn
