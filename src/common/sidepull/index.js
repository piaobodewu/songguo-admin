import React , {Component} from 'react';
import { Layout, Menu, Icon } from 'antd';
import {Logo} from './style';
import {Link} from 'react-router-dom';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class SidePull extends Component{

    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        // console.log(collapsed);
        this.setState({ collapsed });
    };

    render(){
        return(
            <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
            >
                <div>
                    <Logo />
                </div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        <Link to='/'>
                            <Icon type="home" />
                            <span>控制台</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to='/school'>
                            <Icon type="read" />
                            <span>学校</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={<span><Icon type="copy" /><span>订单</span></span>}
                    >
                        <Menu.Item key="3">订单图</Menu.Item>
                        <Menu.Item key="4">订单管理</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={<span><Icon type="user" /><span>账户</span></span>}
                    >
                        <Menu.Item key="5">用户</Menu.Item>
                        <Menu.Item key="6">管理员</Menu.Item>
                        <Menu.Item key="7">角色管理</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub3"
                        title={<span><Icon type="ordered-list" /><span>页面管理</span></span>}
                    >
                        <Menu.Item key="8">首页轮播图</Menu.Item>
                        <Menu.Item key="9">广告内嵌</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub4"
                        title={<span><Icon type="setting" /><span>设置</span></span>}
                    >
                        <Menu.Item key="10">系统设置</Menu.Item>
                        <Menu.Item key="11">修改密码</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        )
    }
}

export default SidePull;