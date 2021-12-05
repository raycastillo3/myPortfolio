import styles2 from '../../styles/Home.module.css';
import styles from '../../styles/Layout.module.css';
import Image from 'next/image'



export default function Footer (){

    return (
        <div className={styles2.container}>
            <footer className={styles2.footer}>
                <a>
                Footer
                <span className={styles.logo}>
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </span>
                </a>
            </footer>
            <h7> the footer is a work in progress</h7>
        </div>
    )
        
}
 