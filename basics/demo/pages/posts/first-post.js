import Head from 'next/head'
import Link from 'next/link'

export default function FirstPost() {
    return (
    <>
    <Head>
        <title>Experiments</title>
    </Head>

    <h1>This is are experiments</h1> 
    <h2>
        <Link href = '/'>
            <a>Back to home</a>
        </Link>
    </h2>
    </> 
    )
}