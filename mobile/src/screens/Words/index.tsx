import React from 'react'
import Word from '../../components/Word'
import * as Styled from './styles'

const words = [
  {
    id: '1',
    word: 'Test 1',
    isActive: true,
  },
  {
    id: '2',
    word: 'Test 2',
    isActive: true,
  },
  {
    id: '3',
    word: 'Test 3',
    isActive: true,
  },
  {
    id: '4',
    word: 'Test 4',
    isActive: true,
  },
  {
    id: '5',
    word: 'Test 5',
    isActive: true,
  },
  {
    id: '6',
    word: 'Test 6',
    isActive: true,
  },
  {
    id: '7',
    word: 'Test 7',
    isActive: true,
  },
  {
    id: '8',
    word: 'Test 8',
    isActive: true,
  },
  {
    id: '9',
    word: 'Test 9',
    isActive: true,
  },
  {
    id: '10',
    word: 'Test 10',
    isActive: true,
  },
  {
    id: '11',
    word: 'Test 11',
    isActive: true,
  },
  {
    id: '12',
    word: 'Test 12',
    isActive: true,
  },
  {
    id: '13',
    word: 'Test 13',
    isActive: true,
  },
  {
    id: '14',
    word: 'Test 14',
    isActive: true,
  },
  {
    id: '15',
    word: 'Test 15',
    isActive: true,
  },
  {
    id: '16',
    word: 'Test 1',
    isActive: true,
  },
  {
    id: '17',
    word: 'Test 2',
    isActive: true,
  },
  {
    id: '18',
    word: 'Test 3',
    isActive: true,
  },
  {
    id: '19',
    word: 'Test 4',
    isActive: true,
  },
  {
    id: '20',
    word: 'Test 5',
    isActive: true,
  },
  {
    id: '21',
    word: 'Test 6',
    isActive: true,
  },
  {
    id: '22',
    word: 'Test 7',
    isActive: true,
  },
  {
    id: '23',
    word: 'Test 8',
    isActive: true,
  },
  {
    id: '24',
    word: 'Test 9',
    isActive: true,
  },
  {
    id: '25',
    word: 'Test 10',
    isActive: true,
  },
  {
    id: '26',
    word: 'Test 11',
    isActive: true,
  },
  {
    id: '27',
    word: 'Test 12',
    isActive: true,
  },
  {
    id: '28',
    word: 'Test 13',
    isActive: true,
  },
  {
    id: '29',
    word: 'Test 14',
    isActive: true,
  },
  {
    id: '30',
    word: 'Test 15',
    isActive: true,
  },
]

const Words = () => {
  const renderItem = ({ item }: any) => <Word word={item} />

  return (
    <Styled.WordsContainer>
      <Styled.SearchInput
        placeholder="Search..."
        placeholderTextColor="#000000"
      />
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
