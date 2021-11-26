import Link from 'next/link'
import styles from '../../styles/Layout.module.css';
import {useState} from "react";
import styles2 from '../../styles/Home.module.css';
import Image from 'next/image'
import {IoLogoVercel} from 'react-icons/io';
import { AppBar, CssBaseline, Menu, MenuList, Toolbar, Typography, Button} from '@mui/material';
import useStyles from '../components/styles';



export default function Layout ({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const openMenu = ()=> setIsOpen(!isOpen);
    const classes = useStyles()

    
    return <>
    <CssBaseline />
    <AppBar position="relative">
      <Toolbar>
        <Typography className={classes.navTitle} variant="h6" >
          Front-End  
          <a href="https://github.com/raycastillo3"> Software Developer</a> 
        </Typography>
      </Toolbar>
     
    </AppBar>
     {/**Hamburger drop-down */}
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


     

     {/**Footer */}
        {children }
        <div className={styles2.container}>
            <footer className={styles2.footer}>
                <a>
                Footer
                <span className={styles.logo}>
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </span>
                </a>

            </footer>
            
        </div>

  </>
}
