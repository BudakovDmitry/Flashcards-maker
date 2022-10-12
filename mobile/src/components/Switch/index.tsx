import React from 'react'
import * as Styled from './styles'
import { MAIN_COLOR } from '../../constants'

type SwitchProps = {
  value: boolean
  onChange: () => void
  isDisabled?: boolean
}

const Switch = ({ value, onChange, isDisabled }: SwitchProps) => {
  return (
    <Styled.Switch
      trackColor={{ false: '#ffffff', true: MAIN_COLOR }}
      thumbColor={'#ffffff'}
      onValueChange={onChange}
      value={value}
      disabled={isDisabled}
    />
  )
}

export default Switch
