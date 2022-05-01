import { useEffect } from 'react';
import Layout from '../components/Layout'

const IndexPage = () => {
  useEffect(() => {
    // fetch('api/contents?idx=103807').then((res) => console.log('???', res.json()));
  }, []);

  return (
  <Layout title="영화 & 드라마 무작위 추천">
    <h1>Hello Next.js 👋</h1>
  </Layout>
  );
}

export default IndexPage
