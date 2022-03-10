import {useState} from "react";
import styles from '../styles/Layout.module.css';
import Link from 'next/link'


export default function HamburgerDropDown (){
    const [isOpen, setIsOpen] = useState(false);
    const openMenu = () => setIsOpen(!isOpen);


    return <>
    <header className={styles.header}>
        <nav className={styles.navbar}>
         <ul className={isOpen === false ?
                 styles.navmenu : styles.navmenu + ' ' + styles.active}>
                 <li className={styles.navitem}>
                 <Link href='/'>
                     <a className={styles.navlink}>Projects</a>
                 </Link>
             </li>
             <li className={styles.navitem}>
                 <Link href='/about'>
                     <a className={styles.navlink}>About Me</a>
                 </Link>
             </li>
         </ul>
         <button className={isOpen === false ?
                             styles.hamburger : styles.hamburger + ' '+ styles.active }
                             onClick={openMenu}>
             <span className={styles.bar}></span>
             <span className={styles.bar}></span>
             <span className={styles.bar}></span>
             <span className={styles.bar}></span>
         </button>
         </nav>
     </header>

    </>
}