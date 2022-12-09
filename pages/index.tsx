import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";

// main content
import MainContent from "../components/MainContent";
import { Main } from "next/document";

export default function Home() {
  return (
    <div className='flex flex-col items-center'>
      <Head>
        <title>Convert To Arrow</title>
        <meta
          name='description'
          content='Rewritten in NextJS/TypeScript/TailwindCSS'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <MainContent />
      </Layout>
    </div>
  );
}
