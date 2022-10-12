import React from 'react'
import * as Styled from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { MAIN_COLOR } from '../../constants'

const Logout = () => {
  return (
    <Styled.LogoutContainer>
      <Styled.LogoutTouchable onPress={() => {}}>
        <Styled.LogoutTouchableContainer>
          <Ionicons name="log-out-outline" size={22} color={MAIN_COLOR} />
          <Styled.LogoutText>Logout</Styled.LogoutText>
        </Styled.LogoutTouchableContainer>
      </Styled.LogoutTouchable>
    </Styled.LogoutContainer>
  )
}

export default Logout
