import { useRouter } from 'next/router';
import Layout from '../../components/MyLayout';
import Title from '../../components/Title';
import Content from '../../components/Content';

export default function Post(props) {
  const post = props.posts[0];

  const createMarkup = () => {
    return {__html: post.content.rendered};
  }
  return (
    <Layout>
      <Title>{post.title.rendered}</Title>
      <Content>
        <div dangerouslySetInnerHTML={ createMarkup() }></div>
      </Content>
    </Layout>
  );
}

Post.getInitialProps = async function(context) {
  const { id } = context.query;

  const res = await fetch(`https://jameswrightdev.co.uk/wp-json/wp/v2/posts?slug=${id}`);
  const data = await res.json();
  return {
    posts: data
  };
};