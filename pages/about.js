import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { CardContent, CardMedia, CssBaseline, Typography, Card, Grid, Container, Paper }from '@mui/material'
import useStyles from './components/styles'


const card1 = [{id: 0, name:'Raymond Castillo', description:'Software Developer', image:'https://source.unsplash.com/random'}]

export default function About() {
const classes = useStyles ()


  return (
    <>
    
      <Head>
        <title>About Me</title>
      </Head>

        <main>
        <CssBaseline/>
      <Container className={classes.cardGrid} maxWidth="md" align="center">
        <Grid container spacing={6} justifyContent="center">
      {card1.map((card) =>(
        <Grid align="center" item key={card.id} xs={12} sm={6} md={4}>
          <Card align="outline" className={classes.card}>
                  <CardMedia className={classes.CardMedia}
                  image={card.image}
                  title={card.title}>
                  </CardMedia>
                    <CardContent className={classes.CardContent}>
                      <Typography className={classes.myName} variant="h5" variant='h5'>
                        {card.name}
                      </Typography>
                        <Typography className={classes.mainDescription} gutterBottom variant='h6' color="textSecondary" paragraph>
                          {card.description}
                        </Typography>
                    </CardContent>
                </Card>
                </Grid>
      ))}
        </Grid>
        
      </Container>

        
        <Typography className={classes.mainDescription} variant="h6" align="center" paragraph gutterBottom color="textPrimary"> 
        This is my about page! This is my about page! This is my about page! This is my about page! This is my about page! This is my about page!
        This is my about page! This is my about page! This is my about page! This is my about page! This is my about page! This is my about page! 
        This is my about page! This is my about page! This is my about page! This is my about page! This is my about page! This is my about page! 
        This is my about page! This is my about page!  
          </Typography>
          
       



        </main>
    </>
    

  )
}
