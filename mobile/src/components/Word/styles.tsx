import styled from 'styled-components/native'

export const WordContainer = styled.SafeAreaView`
  flex: 1;
  border-bottom-width: 1px;
  border-bottom-color: #d9d9d9;
  height: 80px;
  flex-direction: row;
  padding: 20px;
`

export const WordsContainer = styled.SafeAreaView`
  margin-top: 10px;
`

export const Word = styled.Text`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: bold;
`

export const WordTranslate = styled.Text`
  font-size: 18px;
  font-style: italic;
  color: #787878;
`

export const ImageTouchable = styled.TouchableOpacity`
  margin: 23px 30px;
`
