import { Typography, Card, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button, cardClasses, Link, CardActions} from '@mui/material'
import useStyles from '../components/styles'



const cards = [{ 
    id: 0, title: 'Caesar Cipher', 
    description: 'The Caesar Cipher was created by Roman Emperor Julius Caesar so that he could communicate secretly with his army. It is a substitution cipher where each letter is replaced by another letter to encode/decode a secret text. It is also known as the shift cipher.',
    image: 'https://cdn01.alison-static.net/courses/2495/alison_courseware_intro_2495.jpg', 
    codeUrl: 'https://github.com/raycastillo3/Cryptosystem', 
    videoUrl: 'https://www.youtube.com' },
    { id: 1, title: 'Rail Fence Cipher', 
    description: 'The Rail Fence cipher is a classical type of transposition cipher. It names comes from the manner in which encryption is performed. It is also called a zigzag cipher.', 
    image: 'https://cdn01.alison-static.net/courses/2495/alison_courseware_intro_2495.jpg', 
    codeUrl: 'https://github.com/raycastillo3/Cryptosystem', 
    videoUrl: 'youtube.com/project1' },
    { id: 2, title: 'Project #3', 
    description: 'Coming soon!', 
    image: 'https://image.freepik.com/free-vector/neon-style-coming-soon-glowing-background-design_1017-25516.jpg', 
    codeUrl: 'github.com/project1', videoUrl: 'https://www.youtube.com'}];


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
            Hello everyone, welcome to my portfolio in which you can find all my personal and school projects.
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