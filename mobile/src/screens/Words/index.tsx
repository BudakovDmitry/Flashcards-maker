import React from 'react'
import Word from '../../components/Word'
import * as Styled from './styles'

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

const Words = () => {
  const renderItem = ({ item }: any) => <Word word={item.word} />

  return (
    <Styled.WordsContainer>
      <Styled.WordsListContainer>
        <Styled.WordsList
          data={words}
          renderItem={renderItem}
          keyExtractor={(item: any) => item.id}
        />
      </Styled.WordsListContainer>
    </Styled.WordsContainer>
  )
}

export default Words
