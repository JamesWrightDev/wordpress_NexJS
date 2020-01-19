import Layout from '../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import Title from '../components/Title';
import Post from '../components/Post';

export default function Blog(props) {
  const { posts } = props;

  return (
    <Layout menu={props.menu}>
      <Title>My Blog</Title>
      <h2>Posts</h2>
      {
          posts && posts.map( post => {
            return(
            <Post
              id={post.slug}
              title={post.title.rendered}
              key={post.id}></Post>
            )
          })
        }
    </Layout>
  );
}

Blog.getInitialProps = async function() {
  const posts = await fetch('https://jameswrightdev.co.uk/wp-json/wp/v2/posts');
  const postsData = await posts.json();

  const menu = await fetch('https://jameswrightdev.co.uk/wp-json/menus/v1/menus/main-navigation');
  const menuData = await menu.json();

  return {
    posts: postsData,
    menu: menuData.items
  };
};