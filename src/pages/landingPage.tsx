import React from 'react';
import { Layout } from "antd";
import { Content, Footer, Header } from 'antd/es/layout/layout';
import HeaderView from '../components/header/HeaderView';
import './LandingPage.css';

const LandingPage = ({navigation, route }: any) => {



    return (
        <Layout className='layout'>
            <Header className='header'>
                <HeaderView/>
            </Header>
            {/* <Content>content</Content>
            <Footer>footer</Footer> */}
        </Layout>
    )

}

export default LandingPage;