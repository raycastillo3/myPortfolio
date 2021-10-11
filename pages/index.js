import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ray's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://github.com/raycastillo3"> Ray's Portfolio!</a>
        </h1>

        <p className={styles.description}>
          Check Out My <code className={styles.code}>Next.js Projects</code>
        </p>

        <div className={styles.grid}>
       
        <a href="https://github.com/raycastillo3" className={styles.card}>
                      <h2>Coming Soon! &rarr;</h2>
                      <p>This project is coming soon.</p>
                    </a>

          <a href="https://github.com/raycastillo3" className={styles.card}>
            <h2>Coming Soon &rarr;</h2>
            <p>This project is coming soon.</p>
          </a>
          <a href="https://github.com/raycastillo3" className={styles.card}>
            <h2>Coming Soon &rarr;</h2>
            <p>This project is coming soon.</p>
          </a>

          <a href="https://github.com/raycastillo3" className={styles.card}>
            <h2>Coming Soon &rarr;</h2>
            <p>This project is coming soon.</p>
          </a>

          <a href="https://github.com/raycastillo3" className={styles.card}>
            <h2>Coming Soon &rarr;</h2>
            <p>This project is coming soon.</p>
          </a>

          <a href="https://github.com/raycastillo3" className={styles.card}>
            <h2>Coming Soon &rarr;</h2>
            <p>This project is coming soon.</p>
          </a>

          <a href="https://github.com/raycastillo3" className={styles.card}>
          <h2>Coming Soon &rarr;</h2>
          <p>This project is coming soon.</p>
        </a>

        <a href="https://github.com/raycastillo3" className={styles.card}>
        <h2>Coming Soon &rarr;</h2>
        <p>This project is coming soon.</p>
      </a>
   
        </div>
      </main>

      
    </div>
  )
}
