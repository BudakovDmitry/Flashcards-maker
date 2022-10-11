import React from 'react'
import * as Styled from './styles'
import { NavigationProp, ParamListBase } from '@react-navigation/native'

type AddWordButtonProps = {
  navigation: NavigationProp<ParamListBase>
}

const AddWordButton = ({ navigation }: AddWordButtonProps) => {
  return (
    <Styled.ButtonContainer onPress={() => navigation.navigate('NewWords')}>
      <Styled.ButtonText>+</Styled.ButtonText>
    </Styled.ButtonContainer>
  )
}

export default AddWordButton
