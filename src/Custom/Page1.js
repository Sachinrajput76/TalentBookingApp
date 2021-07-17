import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { Divider } from '@material-ui/core'
import { ReactComponent as Comp1 } from '../myimages/images/comp1.svg'
import { ReactComponent as Comp2 } from '../myimages/images/comp2.svg'
import Comp3 from '../myimages/images/comp3.png'
import Search from '../myimages/images/search.png'
import Brouwse from '../myimages/images/browser.png'

import Lock from '../myimages/images/lock.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: 98 + `%`,
    margin: 'auto',

    [theme.breakpoints.down('sm')]: {
      overflow: 'hidden',
    },
    [theme.breakpoints.up('md')]: {
      overflow: 'hidden',
    },
  },
  divider: {
    width: 10 + `%`,
    height: 4,
    background: '#002d4b',
    margin: 0 + ' auto',
    marginBottom: 60,
  },
  paper: {
    boxShadow: 'none',
    padding: theme.spacing(3),
    textAlign: 'center',

    color: '#002d4b',
  },

  section1: {
    '& img': {
      width: 56 + `%`,
    },
    '& h1': {
      fontSize: 36,
    },
    '& p': {
      width: 40 + `%`,
      margin: 0 + ' auto',
      textAlign: 'center',
    },
  },
  section2: {
    '& p': {
      textAlign: 'left',
    },
    '& img': {
      width: 10 + `%`,
    },
  },
}))

function Page1() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.section1}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h1>Our partners</h1>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
            <Comp1 />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
            <Comp2 className={classes.img2} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
            <img src={Comp3} alt='comp3' />
          </Paper>
        </Grid>

        <Divider className={classes.divider} />

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h1>How it works</h1>
            <p>
              TalentBook uses technology to make booking talent affordable,
              instant, direct and reliable - just as easy as reserving a hotel
              room online! Here’s how it works:
            </p>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3} className={classes.section2}>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
            <img src={Search} alt='nothing' />
            <h1>Search</h1>
            <p>
              Whatever talent you need, start with searching by category,
              availability, and location
            </p>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
            <img src={Brouwse} alt='nothing' />

            <h1>Browse</h1>
            <p>
              Browse through talent profiles based on your chosen category.
              Check availability and compare rates to find the talent that is
              right for you.
            </p>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
            <img src={Lock} alt='nothing' />
            <h1>Book</h1>
            <p>
              Once you’ve found your favourite talent, book instantly or request
              a booking with the click of a button. It really is that simple!
            </p>
          </Paper>
        </Grid>
        <Divider className={classes.divider} />
      </Grid>
    </div>
  )
}

export default Page1
