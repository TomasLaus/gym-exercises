import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

import Logo from '../assets/images/Logo.png'

const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4' >
      <Stack gap='40px' alignItems='center' px='40px' pt='24px' >
        <img src={Logo} alt="logo" style={{ width: '60px', height: '40px', display: 'inline'}} />
        <Typography color='#FF2625' fontWeight='600' fontSize='26px' >
            Fitness Club
        </Typography>

        <Typography fontSize="14px" fontWeight="bold" color="#3A1212" mb='15px'>
          Made with 💗 by <a href="https://github.com/TomasLaus" target='_blank' rel='noreferrer'>@TomasLaus</a>
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer