import { Button } from '@chakra-ui/react'
import { useEffect } from 'react'
import Background from '../components/Background'
import Layout from '../components/Layout'

const IndexPage = () => {
  useEffect(() => {
    // fetch('api/contents?idx=103807').then((res) => console.log('???', res.json()));
  }, []);

  return (
    <Layout title="영화 & 드라마 무작위 추천">
      <Button colorScheme='messenger'>영화 & 드라마 무작위 추천 🍿</Button>
      <Background />
    </Layout>
  );
}

export default IndexPage
