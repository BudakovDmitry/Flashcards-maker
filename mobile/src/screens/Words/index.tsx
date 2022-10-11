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
  {
    id: '7',
    word: 'Test 7',
  },
  {
    id: '8',
    word: 'Test 8',
  },
  {
    id: '9',
    word: 'Test 9',
  },
  {
    id: '10',
    word: 'Test 10',
  },
  {
    id: '11',
    word: 'Test 11',
  },
  {
    id: '12',
    word: 'Test 12',
  },
  {
    id: '13',
    word: 'Test 13',
  },
  {
    id: '14',
    word: 'Test 14',
  },
  {
    id: '15',
    word: 'Test 15',
  },
  {
    id: '16',
    word: 'Test 1',
  },
  {
    id: '17',
    word: 'Test 2',
  },
  {
    id: '18',
    word: 'Test 3',
  },
  {
    id: '19',
    word: 'Test 4',
  },
  {
    id: '20',
    word: 'Test 5',
  },
  {
    id: '21',
    word: 'Test 6',
  },
  {
    id: '22',
    word: 'Test 7',
  },
  {
    id: '23',
    word: 'Test 8',
  },
  {
    id: '24',
    word: 'Test 9',
  },
  {
    id: '25',
    word: 'Test 10',
  },
  {
    id: '26',
    word: 'Test 11',
  },
  {
    id: '27',
    word: 'Test 12',
  },
  {
    id: '28',
    word: 'Test 13',
  },
  {
    id: '29',
    word: 'Test 14',
  },
  {
    id: '30',
    word: 'Test 15',
  },
]

const Words = () => {
  const renderItem = ({ item }: any) => <Word word={item.word} />

  return (
    <Styled.WordsContainer>
      <Styled.SearchInput placeholder="Search..." placeholderTextColor="#000000" />
      <Styled.WordsListContainer>
        <Styled.WordsList
          data={words}
          renderItem={renderItem}
          keyExtractor={(item: any) => item.id}
          initialNumToRender={40}
        />
      </Styled.WordsListContainer>
    </Styled.WordsContainer>
  )
}

export default Words
