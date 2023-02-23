import React,{ReactNode} from 'react';
import styles from '@/styles/Home.module.scss'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
interface Props {
    children:ReactNode,
    class_name?:string
}

const Layout = ({children,class_name}:Props) => {
    return (
        <>
        <Head>
        <title>Daniel's Portfolio</title>
        <meta name="description" content="Daniel's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header></Header>
        <main className={styles.main}>{children}</main>
        <Footer />
        </>
    )
}

export default Layout;