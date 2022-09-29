import { Button, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import image from '../images/image-1.jpg'
import '../styles/Hero.css'

const Hero = () => {
  return (
    <Paper sx={{ backgroundImage: `url(${image})` }}>
      {' '}
      <Box className='hero-text'>
        <Typography variant='h3' className='business-support-text'>
          Business Support <br /> where & when <br /> you need it
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

export default Hero
