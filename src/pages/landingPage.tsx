import React from 'react';
import { Layout } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import HeaderComponent from '../components/header/HeaderComponent';
import './LandingPage.css';
import Introduction from '../components/introduction/Introduction';

const LandingPage = ({ navigation, route }: any) => {
  return (
    <Layout className='layout'>
      <HeaderComponent />
      <Content className='content'>
        <Introduction />
      </Content>
    </Layout>
  );
};

export default LandingPage;
