import { AppBar, CssBaseline, Menu, MenuList, Toolbar, Typography, Button, Container} from '@mui/material';
import useStyles from '../components/styles';

export default function Header (){
    const classes = useStyles()

    return <>
    <CssBaseline />
    <AppBar position="relative">
      <Toolbar>
        <Typography className={classes.navTitle} variant="h6">  
          <a href="https://github.com/raycastillo3"> Software Developer</a> 
        </Typography>
      </Toolbar> 
    </AppBar>
    </>
    
    
}