import React from 'react'
import { Image, Text, SafeAreaView } from 'react-native'

const Logo = require('../../../assets/SmallLogo.png')

const Statistics = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image source={Logo} style={{ width: '100%', opacity: 0.3 }} />
      <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}>
        STATISTICS
      </Text>
    </SafeAreaView>
  )
}

export default Statistics
