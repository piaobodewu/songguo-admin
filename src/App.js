import React, { Component } from 'react';
import SidePull from './common/sidepull';
import Footers from './common/footers';
import Headers from './common/headers';
// import { Provider } from 'react-redux';
// import {BrowserRouter , Route} from 'react-router-dom';
import './style';
// import {Layout} from 'style';

import { Layout, Breadcrumb } from 'antd';
const { Content } = Layout;

class App extends Component {
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <SidePull />
                <Layout>
                    <Headers />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            Bill is a cat.
                        </div>
                    </Content>
                    <Footers />
                </Layout>
            </Layout>
        );
    }
}

export default App;
