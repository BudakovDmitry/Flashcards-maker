import styled from 'styled-components/native'
import { MAIN_COLOR } from '../../constants'

export const LogoutContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 10px 20px;
`

export const LogoutText = styled.Text`
  color: ${MAIN_COLOR};
  margin-left: 10px;
`

export const LogoutTouchable = styled.TouchableOpacity`
  padding-vertical: 15px;
`

export const LogoutTouchableContainer = styled.View`
  flex-direction: row;
  align-items: center;
`
