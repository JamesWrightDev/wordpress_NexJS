import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

export default function Header(props) {
  return (
    <div>
      {
        props.menu && props.menu.map(item => {
          return(
            <Link href="/[id]" as={item.slug} key={item.ID}>
              <a style={linkStyle}>{item.title}</a>
            </Link>
          )
        })
      }

    </div>
  )
}
