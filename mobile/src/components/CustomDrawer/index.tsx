import React from 'react'
import { DrawerItemList } from '@react-navigation/drawer'
import Logout from '../Logout'
import Profile from '../Profile'
import * as Styled from './styles'

const CustomDrawer = (props: any) => {
  return (
    <Styled.DrawerContainer>
      <Profile />
      <DrawerItemList {...props} />
      <Logout />
    </Styled.DrawerContainer>
  )
}

export default CustomDrawer
