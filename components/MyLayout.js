import Header from './Header';
import Head from 'next/head';
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 70%;
  margin: 0 auto;
`

export default function Layout(props) {
  return (
    <Wrapper>
       <Head>
        <title>My Blog</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header menu={props.menu}/>
      {props.children}
    </Wrapper>
  )
}