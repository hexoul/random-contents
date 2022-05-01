import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="영화 & 드라마 무작위 추천">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
