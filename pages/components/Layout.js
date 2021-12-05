import {IoLogoVercel} from 'react-icons/io';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HamburgerDropDown from '../components/HamburgerDropDown';



export default function Layout ({ children}) {
    
    return <>
    {/**Header */}
     <Header/>

    {/**Hamburger drop-down */}
    <HamburgerDropDown/>
    
    
     {children }

     {/**Footer */}
     <Footer/>
        

  </>
}


