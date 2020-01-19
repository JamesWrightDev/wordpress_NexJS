import styled from 'styled-components'

const Title = styled.h1`
  font-family: sans-serif;
  font-size: 6rem;
  color: #070C1B;
`

export default ({children}) => <Title>{children}</Title>