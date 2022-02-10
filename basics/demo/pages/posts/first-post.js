import Layout from '../../components/layout'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'

export default function Experiments() {
  return (
    <Layout>
      <Head>
        <title>Experiments</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>Experiments</h1>
        <div className={utilStyles.lightText}>
            <h2>A test</h2>
            <p>The search box should be below</p>
        </div>
      </article>
    </Layout>
  )
}

