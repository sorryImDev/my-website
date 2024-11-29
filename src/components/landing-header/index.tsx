import React from 'react';
import Button from '@mui/material/Button';
import { Avatar, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import './landing-header.css'
import CustomButton from '../customButton';
import CallIcon from '@mui/icons-material/Call';
import LionelLogo from '../LionelLogo/LionelLogo';


const Header: React.FC = ({
}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={2}>
            <LionelLogo/>
        </Grid>
        <Grid size={8}>
           
        </Grid>
        <Grid size={2}>
                <CustomButton text={'Book A Call'} 
                icon={<CallIcon/>} 
                onClick={() => console.log("click")}
                className=''
                />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
