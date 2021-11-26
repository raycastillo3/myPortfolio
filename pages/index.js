import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Typography, Card, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button, cardClasses} from '@mui/material'
import useStyles from './components/styles'
import raypic from './images/raypic.png'
import MediaControlCard from './components/MediaControlCard'


const cards = [{ id: 0, title: 'Project #1', description: 'Coming soon!', image: '<img src="./images/raypic.png">', codeUrl: 'github.com/project1', videoUrl: 'https://www.youtube.com' },
{ id: 1, title: 'Project #2', description: 'Also Coming soon!', image: 'https://source.unsplash.com/random', codeUrl: 'github.com/project1', videoUrl: 'youtube.com/project1' },
{ id: 2, title: 'Project #3', description: 'Underconstruction!', image: 'https://source.unsplash.com/random', codeUrl: 'github.com/project1', videoUrl: 'youtube.com/project1' },
{ id: 3, title: 'Project #4', description: 'In production!', image: 'https://source.unsplash.com/random', codeUrl: 'github.com/project1', videoUrl: 'youtube.com/project1' },
{ id: 4, title: 'Project #5', description: 'Hahaha!', image: 'https://source.unsplash.com/random', codeUrl: 'github.com/project1', videoUrl: 'youtube.com/project1' },
{ id: 5, title: 'Project #6', description: 'New project!', image: 'https://source.unsplash.com/random', codeUrl: 'github.com/project1', videoUrl: 'youtube.com/project1' }];


function Home() {
const classes = useStyles()

  return (
    <>
      <CssBaseline />
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography className={classes.mainTitle} variant="h4" align="center" color="textPrimary" gutterBottom >Welcome to  <a href="https://github.com/raycastillo3"> Ray's Portfolio</a> </Typography>
            <Typography className={classes.mainDescription} variant="h5" align="center" color="textSecondary" paragraph>
            Hello everyone, welcome to my portfolio in which you can find all projects with JavaScript and some of its libraries like Next.JS and React.JS 
            </Typography>
            <div className={classes.buttons}>
            </div> 
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia 
                  className={classes.CardMedia}
                  image={card.image} 
                  title={card.title}
                />
                <CardContent className={classes.CardContent}>
                  <Typography gutterBottom variant="h5"> 
                  {card.title}{/*Heading*/}
                  </Typography>
                  <Typography>
                  {card.description}{/*project description*/}
                  </Typography>
                </CardContent>
                <cardActions>
                  <Button size="small" color="primary"> View Code </Button>
                  <Button size="small" color="primary"> View Video</Button>
                </cardActions>
              </Card>
            </Grid>
          ))}
          
          </Grid>
        </Container>
      </main>
    </>
  )
}

export default Home