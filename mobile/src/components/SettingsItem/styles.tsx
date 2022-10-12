import styled from 'styled-components/native'
import { MAIN_COLOR } from '../../constants'

export const ItemContainer = styled.SafeAreaView`
  width: 90%;
  height: 55px;
  margin: 0 auto;
  margin-bottom: 10px;
  background-color: #cce0e1;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

export const ItemText = styled.Text`
  color: ${MAIN_COLOR};
  font-weight: bold;
  font-size: 18px;
  margin-right: auto;
`

export const ItemSwitch = styled.Switch`
  margin-right: 20px;
`
