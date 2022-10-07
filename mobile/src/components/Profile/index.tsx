import React from 'react'
import * as Styled from './styles'

const ProfileImage = require('../../../assets/profile.jpg')
const BackgroundImage = require('../../../assets/background.jpg')

const Profile = () => {
  return (
    <Styled.ProfileContainer source={BackgroundImage}>
      <Styled.ProfileImage source={ProfileImage} />
      <Styled.ProfileTextContainer>
        <Styled.ProfileName>Dmitry Budakov</Styled.ProfileName>
        <Styled.ProfileCountWords>100 words</Styled.ProfileCountWords>
      </Styled.ProfileTextContainer>
    </Styled.ProfileContainer>
  )
}

export default Profile
