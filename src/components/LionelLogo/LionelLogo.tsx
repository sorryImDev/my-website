import React from 'react';
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';
import './LionelLogo.css'
import { deepOrange } from '@mui/material/colors';

const LionelLogo: React.FC = ({
}) => {
  return (
    <div className='logo-div'>
    <Avatar sx={{bgcolor: 'var(--app-blue)'}} style={{maxHeight: '32px', maxWidth: '32px'}}>
        L
    </Avatar>
    <div style={{lineHeight: '150%', font: 'var(--manrope-font)', marginLeft: '8px'}}>
      Lionel
    </div>
    
    </div>

    
  );
};

export default LionelLogo;
