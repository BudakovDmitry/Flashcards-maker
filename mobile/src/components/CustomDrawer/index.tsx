import React from 'react'
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer'
import * as Styled from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'

const ProfileImage = require('../../../assets/profile.jpg')
const BackgroundImage = require('../../../assets/background.jpg')

const CustomDrawer = (props: any) => {
  return (
    <Styled.DrawContainer>
      <DrawerContentScrollView {...props}>
        <Styled.ProfileContainer source={BackgroundImage}>
          <Styled.ProfileImage source={ProfileImage} />
          <Styled.ProfileTextContainer>
            <Styled.ProfileName>Dmitry Budakov</Styled.ProfileName>
            <Styled.ProfileCountWords>100 words</Styled.ProfileCountWords>
          </Styled.ProfileTextContainer>
        </Styled.ProfileContainer>
        <Styled.DrawContainerItems>
          <DrawerItemList {...props}></DrawerItemList>
        </Styled.DrawContainerItems>
      </DrawerContentScrollView>
      <Styled.LogoutContainer>
        <Ionicons name="log-out-outline" size={22} />
        <Styled.LogoutText>Logout</Styled.LogoutText>
      </Styled.LogoutContainer>
    </Styled.DrawContainer>
  )
}

export default CustomDrawer
