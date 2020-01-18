import Header from './Header';
import Head from 'next/head';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

export default function Layout(props) {
  return (
    <div style={layoutStyle}>
       <Head>
        <title>My Blog</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header menu={props.menu}/>
      {props.children}
    </div>
  )
}