import React from 'react';
import './HeaderComponent.css';
import { Button } from 'antd';
import { ReactComponent as MySvg } from '../../assets/random.svg';
import { Header } from 'antd/es/layout/layout';

const HeaderComponent: React.FC = () => {
  return (
    <Header className='headerview'>
      <div className='logo'>
        <MySvg className='logo' />
      </div>

      <div className='connectButtons'>
        <Button
          color='primary'
          variant='outlined'
          size='large'
          className='connectBtn'
        >
          Let's connect!
        </Button>
      </div>
    </Header>
  );
};

export default HeaderComponent;
