// React
import React, { Component } from 'react';
// store
import store from'./store';
// 路由
import { Provider } from 'react-redux';
import {BrowserRouter , Route} from 'react-router-dom';
// 边框组件
import SidePull from './common/sidePull';
import Footers from './common/footers';
import Headers from './common/headers';
// 内容组件
import Home from './pages/home';
import School from './pages/school';
import AccountUser from './pages/accountUser';
// UI组件
import { Layout, Breadcrumb } from 'antd';
const { Content } = Layout;

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Layout style={{ minHeight: '100vh' }}>
                        <SidePull />
                        <Layout>
                            <Headers />
                            <Content style={{ margin: '0 16px' }}>
                                <Breadcrumb style={{ margin: '16px 0'}}>
                                    <Breadcrumb.Item>User</Breadcrumb.Item>
                                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                                </Breadcrumb>
                                <div>
                                    <Route path='/' exact component={Home}></Route>
                                    <Route path='/school' exact component={School}></Route>
                                    <Route path='/accountUser' exact component={AccountUser}></Route>
                                </div>
                            </Content>
                            <Footers />
                        </Layout>
                    </Layout>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
