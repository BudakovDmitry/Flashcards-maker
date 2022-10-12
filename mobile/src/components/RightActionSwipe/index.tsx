import React from 'react'
import * as Styled from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { View } from 'react-native'

const RightActionSwipe = () => {
  return (
    <Styled.ActionContainer>
      <View>
        <Ionicons name="trash-bin-outline" size={30} color="#ffffff" />
      </View>
    </Styled.ActionContainer>
  )
}

export default RightActionSwipe
