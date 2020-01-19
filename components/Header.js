import Link from 'next/link'
import styled from 'styled-components'

const NavigationBar = styled.div`
  display: flex;


  a {
    font-family: Arial, Helvetica, sans-serif;
    color: black;
    border: solid 1px black;
    text-decoration: none;
    padding: 12px;
    margin-right: 12px;
  }
`

export default function Header(props) {
  return (
    <NavigationBar>
      {
        props.menu && props.menu.map(item => {
          return(
            <Link href="/[id]" as={item.slug} key={item.ID}>
              <a>{item.title}</a>
            </Link>
          )
        })
      }
    </NavigationBar>
  )
}
