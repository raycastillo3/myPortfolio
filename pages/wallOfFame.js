import styles from '../styles/Home.module.css'
import Head from 'next/head'
import { CssBaseline } from '@mui/material'


export default function wallOfFame () {
    return (

    <div className={styles.container}>
      <Head>
        <title> Wall of Fame</title>
        <meta name="description"/>
      </Head>
        
      <main className={styles.main}>
      <CssBaseline/>
      
        <h3 className={styles.title}>
          Welcome to <a>Wall of Fame Page!</a>
        </h3>
        <h4> Coming soon! </h4>
        <h5> This website is a work in process. I am still working on this site </h5>
        <h5 > This page will have a picture and a description of all the people that I have meet and that I am thankful for throughtout my journey </h5>

        
      </main>
</div>
    )


}