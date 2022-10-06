import { Button, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import disneyPlusLogo from '../images/disney-plus-logo.png'
import '../styles/Content.css'

const Content = () => {
  return (
    <Paper
      sx={{
        backgroundColor: '#FFFDD0',
        height: '700px'
      }}
    >
      {' '}
      <Box className='hero-text'>
        <Typography variant='h3' className='business-support-text'>
          Digital Consultancy
        </Typography>
        <Typography className='business-info-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia
        </Typography>
        <Typography className='button-parent'>
          <Button variant='contained' disableElevation className='hero-button'>
            Get Support
          </Button>
        </Typography>
      </Box>
    </Paper>
  )
}

export default Content
