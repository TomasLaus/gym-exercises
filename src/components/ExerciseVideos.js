import React from 'react'
import { Box, Typography, Stack } from '@mui/material'

const ExerciseVideos = ({ exerciseVideos, name }) => {

    if (!exerciseVideos.length) return 'Loading...'

  return (
    <Box sx={{ marginTop: {lg: '200px', xs:'20px'} }} p='20px' >
        <Typography variant='h3' mb='33px' >
            Watch <span style={{color: '#ff2625', textTransform: 'capitalize', }} >{name}</span> exercise videos
        </Typography>
        <Stack justifyContent='flex-start' flexWrap='wrap' alignItems='center' sx={{ flexDirection: {lg: 'row'}, gap: {lg: '110px', xs: '0'} }} >
            {exerciseVideos?.slice(0, 3).map((item, idx) => (
               <a
                key={idx}
                className='exercise-video'
                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                target='_blank'
                rel='noreferrer'
               >
                <img src={item.video.thumbnails[0].url} alt={item.video.title} loading='lazy' />
                <Box>
                    <Typography fontSize='16px' fontWeight={700} color='#000'>
                        {item.video.title}
                    </Typography>
                    <Typography fontSize='12px' fontWeight={500} color='#000'>
                        {item.video.channelName}
                    </Typography>
                </Box>
               </a> 
            ))}
        </Stack>
    </Box>
  )
}

export default ExerciseVideos