import React from 'react';
import './contact-section.css'
import { Input } from '@base-ui-components/react';
import { useTheme } from '@mui/system';
import { TextField } from '@mui/material';
import { SkillBox } from '../../components';

const ContactSection: React.FC = () => {
    return(
        <div className='contact-section'>
            <SkillBox title={'Let\'s Connect'} subTitleTop={'Email'} contact={true}/>
        </div>
    );
};


export default ContactSection;