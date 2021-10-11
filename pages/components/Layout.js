import Link from 'next/link'
import styles from '../../styles/Layout.module.css';
import {useState} from "react";
import styles2 from '../../styles/Home.module.css';
import Image from 'next/image'
import {IoLogoVercel} from 'react-icons/io';


export default function Layout ({ children }) {

    const [isOpen, setIsOpen] = useState(false);
    const openMenu = ()=> setIsOpen(!isOpen);

    return <>
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <Link href='/'>
                    <a className={styles.navlogo}> [Logo] </a>
                </Link>
            <ul className={isOpen === false ? 
                    styles.navmenu : styles.navmenu + ' ' + styles.active}>
                <li className={styles.navitem}>
                    <Link href='/'>
                        <a className={styles.navlink}>Projects</a>
                    </Link>
                </li>
                <li className={styles.navitem}>
                    <Link href='/about'>
                        <a className={styles.navlink}>About</a>
                    </Link>
                </li>
                <li className={styles.navitem}>
                    <Link href='/blog'>
                        <a className={styles.navlink}>Blog</a>
                    </Link>
                </li>
            </ul>
            <button className={isOpen === false ?
                                styles.hamburger : styles.hamburger + ' '+ styles.active }
                                onClick={openMenu}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </button>
            </nav>
        </header>
        {children }
        <div className={styles2.container}>
                <footer className={styles2.footer}>
                    <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                    </a>
            </footer>
        </div>

  </>
}
