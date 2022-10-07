import styled from 'styled-components/native'

export const DrawContainer = styled.View`
  flex: 1;
`

export const DrawContainerItems = styled.View`
  flex: 1;
  padding-top: 10px;
  background: #ffffff;
`

export const ProfileContainer = styled.ImageBackground`
  // padding: 20px;
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
  color: #182442;
  font-weight: bold;
  margin-bottom: 5px;
`
export const ProfileCountWords = styled.Text`
  text-align: center;
  color: #182442;
  font-style: italic;
`

export const LogoutContainer = styled.View`
  padding: 30px;
  display: flex
`

export const LogoutText = styled.Text`
  color: #182442;
`
