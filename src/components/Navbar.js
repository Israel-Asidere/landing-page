import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Facebook, Twitter, YouTube } from '@material-ui/icons'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <Box>
      <AppBar
        position='static'
        color='transparent'
        elevation={0}
        className='navbar'
      >
        <Toolbar disableGutters>
          <Typography variant='h6' noWrap component='div'>
            MUI
          </Typography>

          <Box sx={{ flexGrow: 1 }} display='flex' justifyContent='flex-end'>
            <IconButton
              size='small'
              edge='start'
              color='inherit'
              aria-label='open drawer'
              sx={{ mr: 1 }}
            >
              <Facebook />
            </IconButton>
            <IconButton
              size='small'
              edge='start'
              color='inherit'
              aria-label='open drawer'
              sx={{ mr: 1 }}
            >
              <YouTube />
            </IconButton>
            <IconButton
              size='small'
              edge='start'
              color='inherit'
              aria-label='open drawer'
              sx={{ mr: 1 }}
            >
              <Twitter />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
