import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import './Header.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'transparent',
    color: 'white',
    zIndex: 10,
    position: 'relative',
    boxShadow: 'none',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'flex',
    marginLeft: 'auto',
    fontSize: 16,
    fontWeight: 400,
    fontFamily: 'Montserrat, sansserif',
  },
  menu: {
    display: 'flex',
    justifyContent: 'spaceBetween',

    '& $li': {
      display: 'block',
      padding: '15px 15px',
      cursor: 'pointer',
      [theme.breakpoints.down('sm')]: {
        padding: 0,
      },
    },
  },
}))

export default function Header() {
  const classes = useStyles()
  const menuBar = ['Talent Sign Up', 'Customer Sign Up', 'Log In', 'Help']
  let myMenuBar = menuBar.map((menu) => {
    return <li>{menu}</li>
  })

  return (
    <AppBar position='static' className={classes.root}>
      <Toolbar className={classes.menu}>
        <IconButton
          edge='start'
          className={classes.menuButton}
          color='inherit'
          aria-label='menu'
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' className={classes.title}>
          {myMenuBar}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
