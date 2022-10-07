import React from 'react'
import { DrawerItemList } from '@react-navigation/drawer'
import * as Styled from './styles'

const DrawerItemsList = (props: any) => {
  return (
    <Styled.DrawerContainerItems>
      <DrawerItemList {...props} />
    </Styled.DrawerContainerItems>
  )
}

export default DrawerItemsList
