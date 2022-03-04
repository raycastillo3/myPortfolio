import styles2 from '../styles/Home.module.css';
import styles from '../styles/Layout.module.css';
import Image from 'next/image'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    clickableIcon: {
      color: 'black',
      '&:hover': {
      color: '#0070f3',
      },
    },
  }));


export default function Footer (){
    const classes = useStyles();

    return (
       <div className={styles2.container}>
         <footer className={styles2.footer}>
       {/*   <a> <span className={styles.logo}>
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </span>
                </a>*/}
                <Typography variant="h7" color="textPrimary" > Find Me on Social Media! </Typography>
    </footer> 
            <container>
            <InstagramIcon onClick={event => window.location.href="https://instagram.com"} className={classes.clickableIcon} fontSize="large" style={{minWidth: '80px'}}/>
            <GitHubIcon onClick={event => window.location.href="https://github.com/raycastillo3/"} className={classes.clickableIcon} fontSize="large"  style={{minWidth: '80px'}}/>
            <LinkedInIcon onClick={event => window.location.href="https://www.linkedin.com/in/rcastillo22/"} className={classes.clickableIcon} fontSize="large" style={{minWidth: '80px'}}  />
            </container>
        </div>
    )
        
}
 