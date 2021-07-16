import React from 'react'
import { AppBar, Container, Toolbar, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

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
    fontFamily: 'Montserrat, sansserif',
    '& ul': {
      paddingLeft: 0,

      '& li': {
        listStyle: 'none',
        cursor: 'pointer',
        margin: 8 + 'px' + ' auto',
        [theme.breakpoints.down('sm')]: {
          fontSize: 14,
        },
        [theme.breakpoints.up('md')]: {
          fontSize: 14,
        },
      },
    },
    '& h3': {
      fontSize: '10px',
    },
  },
  unList1: {
    display: 'flex',
    '& li': {
      margin: 0 + ' auto',
    },
  },
}))

const icons = ['icon1', 'icon2', 'icon3']
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
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <h1>TalentBook</h1>
                <ul className={classes.unList1}>{list1}</ul>
              </Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.paper}>
                <h3>Company</h3>
                <p>About us</p>
              </Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.paper}>
                <h3>Customers</h3>
                <ul>{list2}</ul>
              </Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.paper}>
                <h3>Talent</h3>
                <ul>{list3}</ul>
              </Paper>
            </Grid>
            <Grid item xs={2}>
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
