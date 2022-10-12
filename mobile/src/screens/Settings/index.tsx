import React from 'react'
import * as Styled from './styles'
import SettingItem from '../../components/SettingsItem'
import { useSettings } from './useSettings'
import Switch from '../../components/Switch'

const Settings = () => {
  const { isAutoMode, toggleAutoMode, isDarkMode, toggleDarkMode } =
    useSettings()

  return (
    <Styled.SettingsContainer>
      <Styled.SettingsHeaderTextContainer>
        <Styled.SettingsMainHeaderText>Settings</Styled.SettingsMainHeaderText>
      </Styled.SettingsHeaderTextContainer>
      <Styled.SettingsHeaderText>THEME</Styled.SettingsHeaderText>
      <SettingItem
        icon="sunny-outline"
        text="Auto"
        renderAction={<Switch value={isAutoMode} onChange={toggleAutoMode} />}
      />
      <SettingItem
        icon="moon"
        text="Dart theme"
        renderAction={
          <Switch
            value={isDarkMode}
            onChange={toggleDarkMode}
            isDisabled={isAutoMode}
          />
        }
      />
    </Styled.SettingsContainer>
  )
}

export default Settings
