import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Stack } from '@mui/system'
import { SelfImprovement } from '@mui/icons-material'

import '../styles/Services.css'

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
        <SelfImprovement className='service-icon' fontSize='large' />
      </Typography>
      <Typography variant='h5' component='div'>
        Digital Skills & Support
      </Typography>
      <Typography variant='body4' className='service-detail'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum molestiae quas vel sint commodi repudiandae
        consequuntur
      </Typography>
    </CardContent>
  </React.Fragment>
)

export default function OutlinedCard () {
  return (
    <Stack spacing={8} direction='row' className='services-cards'>
      <Box sx={{ minWidth: 250, maxWidth: 350 }}>
        <Card variant='outlined' sx={{ border: 'none', boxShadow: 'none' }}>
          {card}
        </Card>
      </Box>
      <Box sx={{ minWidth: 250, maxWidth: 350 }}>
        <Card variant='outlined' sx={{ border: 'none', boxShadow: 'none' }}>
          {card}
        </Card>
      </Box>
      <Box sx={{ minWidth: 250, maxWidth: 350 }}>
        <Card variant='outlined' sx={{ border: 'none', boxShadow: 'none' }}>
          {card}
        </Card>
      </Box>
    </Stack>
  )
}
