import Footer from '../components/Footer';
import Header from '../components/Header';
import HamburgerDropDown from '../components/HamburgerDropDown';
import { Container } from '@material-ui/core';



export default function Layout ({ children}) {
    
    return <>
    {/**Header */}
     <Header/>

    {/**Hamburger drop-down */}
    <HamburgerDropDown/>

    {children }

    {/**Footer */}
     <Footer/> 
     <Container>
     </Container>
      
    
        
  </>
}


