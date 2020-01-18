import styled from 'styled-components'

const Title = styled.h1`
  font-family: sans-serif;
  font-size: 6rem;
  color: #000;
`

export default ({children}) => <Title>{children}</Title>