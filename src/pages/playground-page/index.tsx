import React from 'react';
import CustomButton from '../../components/customButton';
import CallIcon from '@mui/icons-material/Call';
import LionelLogo from '../../components/LionelLogo/LionelLogo';
import Header from '../../components/landing-header';


const PlaygroundPage: React.FC = () => {
    return(
        <div>
            <Header/>
            <CustomButton text={'Book A Call'} 
            icon={<CallIcon/>} 
            onClick={() => console.log("click")}
            className=''
            />
            <LionelLogo/>
        </div>
    );
};

export default PlaygroundPage;