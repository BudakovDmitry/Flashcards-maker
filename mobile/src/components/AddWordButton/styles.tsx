import styled from 'styled-components/native'
import { MAIN_COLOR } from '../../constants'

export const ButtonContainer = styled.Pressable`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  background-color: ${MAIN_COLOR};
`

export const ButtonText = styled.Text`
  margin-top: -2px;
  margin-left: 1px;
  font-weight: bold;
  font-size: 26px;
  color: #ffffff;
`
