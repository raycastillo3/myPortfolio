import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import images from './images/rayProPic.jpg'

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={4}>
    <Avatar
      alt="Ray Castillo"
      src={images} 
      sx={{ width:256, height:256}}
    />     
    </Stack>
  );
}