import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) =>({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  icon: {
      marginRight: '20px',

  },
  buttons: {
      marginTop: '40PX',
  },
  cardGrid: {
      padding: '20px 0' 

  },
  card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'

  },
  CardMedia: {
      paddingTop: '56.25%' //16:9 images

  },
  CardContent: {
      flexGrow: 1,

  },
  accountButton: {
      align: 'right'
  },
  mainTitle: {
      fontFamily: 'serif',
      fontSize: '4rem',
      fontWeight: 'bold'
  },
  mainDescription: {
      fontFamily: 'timesNewRoman'
  },
  navTitle: {
      fontFamily: 'serif',
      fontSize: '1.5rem',
      fontWeight: 'bold'
  },
  myName: {
      fontFamily: 'serif'
  },
  link: {
      textDecoration: 'none'
  }
}))

export default useStyles