import React,{Component} from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

class Footers extends Component{
    render(){
        return(
            <Footer style={{ textAlign: 'center' }}>
                SongGuo-manage ©2018 Created by DellYounger
            </Footer>
        )
    }
}

export default Footers;