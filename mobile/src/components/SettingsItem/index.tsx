import React from 'react'
import * as Styled from './styles'
import { MAIN_COLOR } from '../../constants'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Switch from '../Switch'

type SettingItemProps = {
  icon: string
  text: string
  renderAction?: JSX.Element
}

const SettingItem = ({ text, icon, renderAction }: SettingItemProps) => {
  return (
    <Styled.ItemContainer>
      <Ionicons
        name={icon}
        size={25}
        color={MAIN_COLOR}
        style={{ marginHorizontal: 20 }}
      />
      <Styled.ItemText>{text}</Styled.ItemText>
      {renderAction}
    </Styled.ItemContainer>
  )
}

export default SettingItem
