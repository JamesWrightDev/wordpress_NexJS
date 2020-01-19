
import styled from 'styled-components'
import Link from 'next/link'
const Wrapper = styled.div`
  font-family: sans-serif;
  margin: 1rem 0;
  color: black;

  a {
    color: black;
  }
`

export default function Post(props) {

  return (
    <Wrapper>
      <Link href="post/[id]" as={`post/${props.id}`}>
      <a>{props.title}</a>
    </Link>
    </Wrapper>
  )
}