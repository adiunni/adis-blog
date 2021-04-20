import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/layout'



export default function firstPost() {
    return (
        <Layout>
            <Head>
                <title>First post page</title>
            </Head>
            <h1 className="container">First Post!</h1>
            <Link href="/">
                <h2 className='container'>
                    <a>Home</a>
                </h2>
            </Link>
            <Image src="/images/img1.jpg" height="247px" width="400px" alt="Banana">
            </Image>

            <style jsx>
                {`.container {
                    min-height: 10vh;
                    padding: 0 0.5rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    }
                `}
            </style>
        </Layout>
    )
    
}