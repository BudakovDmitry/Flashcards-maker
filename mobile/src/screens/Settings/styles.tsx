import styled from 'styled-components/native'
import { MAIN_COLOR } from '../../constants'

export const SettingsContainer = styled.SafeAreaView``

export const SettingsHeaderTextContainer = styled.SafeAreaView`
  margin: 25px;
`

export const SettingsMainHeaderText = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: ${MAIN_COLOR};
`

export const SettingsHeaderText = styled.Text`
  font-size: 20px;
  color: ${MAIN_COLOR};
  margin-left: 25px;
  margin-bottom: 10px;
`

export const ThemeContainer = styled.SafeAreaView`
  width: 90%;
  height: 60px;
  margin: 10px auto;
  background-color: #cce0e1;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

export const ThemeText = styled.Text`
  color: ${MAIN_COLOR};
  font-weight: bold;
  font-size: 18px;
  margin-right: auto;
`
