import React from 'react';
import './HeaderView.css';
import { Button } from 'antd';
import {ReactComponent as MySvg } from '../../assets/random.svg'

const HeaderView: React.FC = () => {
  return (
    <div className="headerview">
      <div className="logo">
        <MySvg className='logo'/>
      </div>

      <div className='connectButtons'>
        <Button color='primary' variant='outlined'>Let's connect!</Button>
      </div>
    </div>

  );
};

export default HeaderView;
