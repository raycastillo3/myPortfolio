import { Typography, Card, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button, cardClasses, Link, CardActions} from '@mui/material'
import useStyles from '../components/styles'



const cards = [{ 
    id: 0, title: 'Cryptosystems', 
    description: 'Built two Cryptosystems(Caeser and Railfence cipher) using Java. Caeser Cipher is one of most easy, used and most famous encryption systems known for its shifting mechanism. The Railfence cipher is an easy to apply transposition cipher that mixes up the order of the letters of a message in a quick way to encrypt the message.', 
    image: 'https://cdn01.alison-static.net/courses/2495/alison_courseware_intro_2495.jpg', 
    codeUrl: 'https://github.com/raycastillo3/Cryptosystem', 
    videoUrl: 'https://www.youtube.com' },
    { id: 1, title: 'Project #2', 
    description: 'Also Coming soon!', 
    image: 'https://image.freepik.com/free-vector/neon-style-coming-soon-glowing-background-design_1017-25516.jpg', 
    codeUrl: 'github.com/project1', 
    videoUrl: 'youtube.com/project1' },
    { id: 2, title: 'Project #3', 
    description: 'Coming soon!', 
    image: 'https://image.freepik.com/free-vector/neon-style-coming-soon-glowing-background-design_1017-25516.jpg', 
    codeUrl: 'github.com/project1', videoUrl: 'https://www.youtube.com'},
    { id: 3, title: 'Project #4', 
    description: 'Coming soon!', 
    image: 'https://image.freepik.com/free-vector/neon-style-coming-soon-glowing-background-design_1017-25516.jpg', 
    codeUrl: 'github.com/project1', 
    videoUrl: 'youtube.com/project1' },
    { id: 4, title: 'Project #5', 
    description: 'Coming soon!', 
    image: 'https://image.freepik.com/free-vector/neon-style-coming-soon-glowing-background-design_1017-25516.jpg', 
    codeUrl: 'github.com/project1', 
    videoUrl: 'youtube.com/project1' },
    { id: 5, title: 'Project #6', 
    description: 'Coming soon!', 
    image: 'https://image.freepik.com/free-vector/neon-style-coming-soon-glowing-background-design_1017-25516.jpg', 
    codeUrl: 'github.com/project1', 
    videoUrl: 'youtube.com/project1' }];


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
                  <Typography align="center" gutterBottom variant="h5"> 
                  {card.title}{/*Heading*/}
                  </Typography>
                  <Typography align="center">
                  {card.description}{/*project description*/}
                  </Typography>
                </CardContent>
                <cardActions align="center">
                  <Button size="small" color="primary" href="https://github.com/raycastillo3/">
                  View Code
                  </Button>
                </cardActions>
                <cardActions align="center" >
                  <Button size="small" color="primary"> View Project</Button>
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