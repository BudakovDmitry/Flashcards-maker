import React from 'react'
import * as Styled from './styles'

type WordProps = {
  word: string
}

const Word = ({ word }: WordProps) => {
  return (
    <Styled.WordContainer>
      <Styled.Word>{word}</Styled.Word>
    </Styled.WordContainer>
  )
}

export default Word
