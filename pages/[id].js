import Layout from '../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import Router from 'next/router';
import Error from './404';
import PageWrapper from '../components/PageWrapper';
import Title from '../components/Title';
const Page = (props) => {

  const { page } = props;
  if ( !page ) return <Error/>
  const createMarkup = () => {
    return {__html: page.content.rendered};
  }
  return (
    <Layout>
          <Title>{page.title.rendered}</Title>
          <div dangerouslySetInnerHTML={ createMarkup() }></div>
    </Layout>
  );
}

Page.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://jameswrightdev.co.uk/wp-json/wp/v2/pages?slug=${id}`);
  const data = await res.json();
  return {
    page: data[0]
  };
};
export default Page;