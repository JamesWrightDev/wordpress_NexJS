import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Title from '../components/Title';
const PageLink = props => (
  <li>
    <Link href="/[id]" as={`/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

const PostLink = props => (
  <li>
    <Link href="post/[id]" as={`post/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

export default function Blog(props) {
  const { pages, posts } = props;

  return (
    <Layout menu={props.menu}>
      <Title>My Blog</Title>
      <h2>Pages</h2>
      <ul>
        {
          pages && pages.map( post => {
            return(
            <PageLink id={post.slug} key={post.id}/>
            )
          })
        }
      </ul>
      <h2>Posts</h2>
      <ul>
      {
          posts && posts.map( post => {
            return(
            <PostLink id={post.slug} key={post.id}/>
            )
          })
        }
      </ul>
    </Layout>
  );
}

Blog.getInitialProps = async function() {
  const pages = await fetch('https://jameswrightdev.co.uk/wp-json/wp/v2/pages');
  const pageData = await pages.json();

  // const posts = await fetch('https://jameswrightdev.co.uk/wp-json/wp/v2/posts');
  // const postsData = await posts.json();

  const menu = await fetch('https://jameswrightdev.co.uk/wp-json/menus/v1/menus/main-navigation');
  const menuData = await menu.json();

  return {
    // posts: postsData,
    pages: pageData,
    menu: menuData.items
  };
};