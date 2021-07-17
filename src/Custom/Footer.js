import React from 'react'
import { AppBar, Container, Toolbar, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      overflow: 'hidden',
    },
    [theme.breakpoints.up('md')]: {
      overflow: 'hidden',
    },
  },
  paper: {
    padding: theme.spacing(3),
    background: 'none',
    boxShadow: 'none',
    color: 'white',
    textAlign: 'left',

    '& ul': {
      paddingLeft: 0,
      [theme.breakpoints.down('sm')]: {
        fontSize: 14,
        justifyContent: 'space-between',
        marginTop: 10,
      },

      '& li': {
        listStyle: 'none',
        cursor: 'pointer',
        margin: 8 + 'px ' + 8 + 'px',
        [theme.breakpoints.down('sm')]: {
          fontSize: 14,
        },
        [theme.breakpoints.up('md')]: {
          fontSize: 14,
        },
      },
    },
    '& h1': {
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
      },
      [theme.breakpoints.up('md')]: {
        textAlign: 'left',
      },

      textAlign: 'left',
    },
  },
  unList1: {
    display: 'flex',
    '& li': {
      margin: 0 + ' auto',
    },
  },
}))

const icons = [
  <FacebookIcon />,
  <TwitterIcon />,
  <LinkedInIcon />,
  <GitHubIcon />,
]
const Customers = [' Sign up', 'How it works', 'TalentBook Guarantee']
const Talent = ['Sign up', 'Overview', 'Setup', 'Financials']
const Resources = ['Help', 'Blog', 'Contact us', 'Privacy & Terms']

const list1 = icons.map((st) => {
  return <li>{st}</li>
})
const list2 = Customers.map((st) => {
  return <li>{st}</li>
})
const list3 = Talent.map((st) => {
  return <li>{st}</li>
})
const list4 = Resources.map((st) => {
  return <li>{st}</li>
})

function Footer() {
  const classes = useStyles()
  return (
    <AppBar position='static' color='primary'>
      <Container maxWidth='md'>
        <Toolbar>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Paper className={classes.paper}>
                <h1>TalentBook</h1>
                <ul className={classes.unList1}>{list1}</ul>
              </Paper>
            </Grid>
            <Grid item xs={6} md={2}>
              <Paper className={classes.paper}>
                <h3>Company</h3>
                <p>About us</p>
              </Paper>
            </Grid>
            <Grid item xs={6} md={2}>
              <Paper className={classes.paper}>
                <h3>Customers</h3>
                <ul>{list2}</ul>
              </Paper>
            </Grid>
            <Grid item xs={6} md={2}>
              <Paper className={classes.paper}>
                <h3>Talent</h3>
                <ul>{list3}</ul>
              </Paper>
            </Grid>
            <Grid xs={6} md={2}>
              <Paper className={classes.paper}>
                <h3>Resources</h3>
                <ul>{list4}</ul>
              </Paper>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Footer
