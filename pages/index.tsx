import { Button, Flex, VStack } from '@chakra-ui/react'
import { useCallback, useState } from 'react'
import Background from '../components/Background'
import Layout from '../components/Layout'
import randomInt from '../utils'

const IndexPage = () => {
  const [img, setImg] = useState('https://particles.js.org/images/background3.jpg');
  const [isLoading, setIsLoading] = useState(false);

  const pickContent = useCallback(async () => {
    const idx = randomInt(1, 105335);
    const resp = await fetch(`api/contents?idx=${idx}`);
    if (resp.status !== 200) return null;

    const { title, poster } = await resp.json();
    if (!title || !poster) return null;

    return { title, poster };
  }, []);

  const pickContentWithRetry = useCallback(async () => {
    setIsLoading(true);
    const interval = setInterval(async () => {
      const { title, poster } = await pickContent();
      if (!title || !poster) return;

      clearInterval(interval);
      setImg(poster);
      setIsLoading(false);
    }, 1000);
  }, [pickContent]);

  return (
    <Layout title="작품 무작위 추천">
      <Flex h='calc(100vh)' justify='center' align='center'>
        <VStack>
          <Button
            size='lg'
            colorScheme='messenger'
            isLoading={isLoading}
            onClick={pickContentWithRetry}
          >
            작품 무작위 추천 🍿
          </Button>
        </VStack>
      </Flex>
      <Background img={img} />
    </Layout>
  );
}

export default IndexPage
