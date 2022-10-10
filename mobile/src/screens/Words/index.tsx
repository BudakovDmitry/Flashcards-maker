import React from 'react'
import { NavigationProp, ParamListBase } from '@react-navigation/native'
import { SafeAreaView, Text, Button } from 'react-native'
import Word from '../../components/Word'
import * as Styled from './styles'

type WordsProps = {
  navigation: NavigationProp<ParamListBase>
}

const words = [
  {
    id: '1',
    word: 'Test 1',
  },
  {
    id: '2',
    word: 'Test 2',
  },
  {
    id: '3',
    word: 'Test 3',
  },
  {
    id: '4',
    word: 'Test 4',
  },
  {
    id: '5',
    word: 'Test 5',
  },
  {
    id: '6',
    word: 'Test 6',
  },
]

const Words = ({ navigation }: WordsProps) => {
  const renderItem = ({ item }: any) => <Word word={item.word} />

  return (
    <SafeAreaView>
      <Text>Words</Text>
      <Button title="Click" onPress={() => navigation.navigate('NewWords')} />
      <Text>My words</Text>
      <Styled.WordsListContainer>
        <Styled.WordsList
          data={words}
          renderItem={renderItem}
          keyExtractor={(item: any) => item.id}
        />
      </Styled.WordsListContainer>
    </SafeAreaView>
  )
}

export default Words
