import { Button, Flex, Link, VStack } from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import Background from '../components/Background';
import Layout from '../components/Layout';
import { Content } from '../interfaces';
import { randomInt } from '../utils';

const IndexPage = () => {
  const [img, setImg] = useState<string>('https://particles.js.org/images/background3.jpg');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [content, setContent] = useState<Content>(null);

  const pickContent = useCallback(async () => {
    const idx = randomInt(1, 105335);
    const resp = await fetch(`api/contents?idx=${idx}`);
    if (resp.status !== 200) return null;
    const pick: Content = await resp.json();
    return pick;

    // return fetchContent(idx);
  }, []);

  const pickContentWithRetry = useCallback(async () => {
    setIsLoading(true);
    const interval = setInterval(async () => {
      const pick = await pickContent();
      if (!pick) return;

      clearInterval(interval);
      setContent(pick);
      setImg(pick.poster);
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
          {content &&
            <Link href={content.url} _focus={{ boxShadow: 'none' }} isExternal>
              <Button size='lg' colorScheme='whatsapp'>
                {`"${content.title}" 보러가기!`}
              </Button>
            </Link>
          }
        </VStack>
      </Flex>
      <Background img={img} />
    </Layout>
  );
}

export default IndexPage;
