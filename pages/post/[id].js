import { useRouter } from 'next/router';
import Layout from '../../components/MyLayout';

export default function Post(props) {
  const router = useRouter();;
  const post = props.posts[0];
  const createMarkup = () => {
    return {__html: post.content.rendered};
  }
  return (
    <Layout>
      <h1>{router.query.id}</h1>
      <div dangerouslySetInnerHTML={ createMarkup() }></div>
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