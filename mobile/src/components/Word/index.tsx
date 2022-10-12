import React from 'react'
import * as Styled from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { WordType } from '../../types'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import RightActionSwipe from '../RightActionSwipe'

type WordProps = {
  word: WordType
}

const Word = ({ word }: WordProps) => {
  return (
    <Swipeable
      rightThreshold={40}
      renderRightActions={RightActionSwipe}
      onSwipeableRightOpen={() => alert('Delete?')}
    >
      <Styled.WordContainer>
        <Styled.ImageTouchable>
          {word.isActive ? (
            <Ionicons name="eye-outline" size={30} />
          ) : (
            <Ionicons name="eye-off-outline" size={30} />
          )}
        </Styled.ImageTouchable>
        <Styled.WordsContainer>
          <Styled.Word>{word.word}</Styled.Word>
          <Styled.WordTranslate>{word.word}</Styled.WordTranslate>
        </Styled.WordsContainer>
      </Styled.WordContainer>
    </Swipeable>
  )
}

export default Word
