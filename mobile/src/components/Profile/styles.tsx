import styled from 'styled-components/native'
import { MAIN_COLOR } from '../../constants'

export const ProfileContainer = styled.ImageBackground`
  margin-bottom: 10px;
`

export const ProfileImage = styled.Image`
  margin: 20px auto;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  margin-bottom: 10px;
`
export const ProfileTextContainer = styled.View`
  background-color: #ffffff;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 10px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
`

export const ProfileName = styled.Text`
  text-align: center;
  color: ${MAIN_COLOR};
  font-weight: bold;
  margin-bottom: 5px;
`
export const ProfileCountWords = styled.Text`
  text-align: center;
  color: #696969;
  font-style: italic;
`
