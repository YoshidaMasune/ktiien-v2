import Header from '@/components/contents/index/Header';
import Layout from '@/components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>KittenQueens</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo/logo_cat.png" />
      </Head>
      <main>
        <Layout>
          {/* header */}
          <section>
            <Header />
          </section>
        </Layout>
      </main>
    </>
  );
}
