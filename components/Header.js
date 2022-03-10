import { AppBar, CssBaseline, Menu, MenuList, Toolbar, Typography, Button, Container} from '@mui/material';
import useStyles from '../components/styles';
import CodeIcon from '@mui/icons-material/Code';
export default function Header (){
    const classes = useStyles()

    return <>
    <CssBaseline />
    <AppBar position="relative">
      <Toolbar>
        <Typography className={classes.navTitle} variant="h6">  
          <CodeIcon fontSize="large"> </CodeIcon> <a href="https://github.com/raycastillo3"> Full Stack Developer</a> 
        </Typography>
      </Toolbar> 
    </AppBar>
    </>
    
    
}