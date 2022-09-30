import {
  Button,
  Divider,
  ImageList,
  ImageListItem,
  ListItem,
  Paper,
  Stack,
  Typography
} from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import image from '../images/image-1.jpg'
import netflixLogo from '../images/netflix-logo.png'
import uberLogo from '../images/uber-logo.png'
import disneyPlusLogo from '../images/disney-plus-logo.png'
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
        <ImageList
          sx={{
            width: 610,
            height: 200,
            overflow: 'hidden',
            objectFit: 'none'
          }}
          cols={4}
          rowHeight={164}
        >
          <Typography className='our-partners'>
            Our
            <br /> Partners:{' '}
          </Typography>
          <ImageListItem
            className='image-list-item'
            direction='row'
            style={{ width: '100%', height: '100%' }}
          >
            <Box className='netflix-logo'>
              <img src={`${disneyPlusLogo}`} alt='netflix logo' />
            </Box>
          </ImageListItem>
          <ImageListItem
            className='image-list-item'
            direction='row'
            style={{ width: '100%', height: '100%' }}
          >
            <Box className='uber-logo'>
              <img
                style={{ width: '100%', height: '100%' }}
                src={`${uberLogo}`}
                alt='uber logo'
              />
            </Box>
          </ImageListItem>
          <ImageListItem
            className='image-list-item'
            direction='row'
            style={{ width: '100%', height: '100%' }}
          >
            <Box className='disney-logo'>
              <img
                src={`${netflixLogo}`}
                alt='Disney+ logo'
                style={{ width: '100%', height: '100%' }}
              />
            </Box>
          </ImageListItem>
        </ImageList>
      </Box>
    </Paper>
  )
}

export default Hero
