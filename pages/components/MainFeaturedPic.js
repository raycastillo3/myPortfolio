import * as React from 'react'
import PropTypes from 'prop-types'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { CardContent, Card} from '@mui/material'
import { ClassNames } from '@emotion/react'
import useStyles from './styles'


function MainFeaturedPic (props){
    const { pic} = props;
    const classes = useStyles()

    return (
    <Paper 
        sx={{postion: 'center',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 6,
        mt: 4, 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${pic.image})`,
        }}
        >
        {/**increase the priority of my main picture */}
        {<img style={{ display:'none'}} src={pic.image} alt={pic.imageText}/>}
        <Grid container> 
            <Grid item md={6}>
                <Box 
                sx={{
                    position: 'relative',
                    p: {xs: 3, md:16},
                    pr: {md: 0},
                }}
                >

                </Box>
                
                
            </Grid>
           
        </Grid>  
            <Grid>
            <Card className={classes.card}>
            <CardContent className={ClassNames.CardContent}>
            <Typography component='h2' variant='h6' color='inherit'>
                        {pic.title}
                    </Typography>
                    <Typography variant='h7' color='textSecondary' fontWeight='bold' paragraph>
                        {pic.description}
                    </Typography>
            </CardContent>
            
            </Card>
            
            </Grid>
                    
                
        </Paper>
    

        
     
             
       

    


    
  
    )
}

MainFeaturedPic.PropTypes = { 
    pic: PropTypes.shape ({
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        imageText: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
}

export default MainFeaturedPic