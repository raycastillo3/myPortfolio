import Head from 'next/head'
import { CssBaseline, Typography, Container,}from '@mui/material'
import useStyles from './components/styles'
import MainFeaturedPic from './components/MainFeaturedPic'


export default function About() {
  
  const classes = useStyles ()
  const mainFeaturedPost={
    title: 'Raymond Castillo',
    description: 
      'Software Developer',
    image: 'https://source.unsplash.com/random',
    imageText: 'main image Description'
  }
  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>

      <main>
        <CssBaseline/>
        <Container maxWidth= 'xs'>
         <MainFeaturedPic pic={mainFeaturedPost}/> 
        </Container>
        

        <Container justifyContent="center" maxWidth="md">
          <Typography maxWidth="md" align="center" justify="center" className={classes.mainDescription} variant="h6" color="textSecondary" paragraph gutterBottom > 
          Ever since I was a kid, I have always enjoyed tearing things apart. I remember dissembling every console, Gameboy, and computer I owned. As I got older, I started to question how all these electronics work. Back then, I did not know what I was doing, but I knew the path I wanted to take on. Before going to college, I spent my time watching many videos and learning more about these devices until I came across Artificial Intelligence(AI). It changed my life!
          This passion carried me through my education at St. Joseph's College. Once in college, I am provided with classes that have boosted my Technical understanding and my Computer Science knowledge. I have taken courses on Data Structures & Algorithms, Database Systems, Computer Programming, and Networking & Computer Communication, along with higher mathematics courses, which has inspired me more to become a Software Developer. I took these courses with the same motivation that drove me as a kid.
          I am aware that there are so many things to learn, and yet I still have the same motivation. I am so excited and grateful to be part of the STEM community.  
          </Typography>
        </Container>
        
          
       



        </main>
    </>
    

  )
}
