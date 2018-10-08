import React,{Component} from 'react';
import {connect} from 'react-redux';
import { Layout ,Icon} from 'antd';
import {actionCreators} from "./store";
const { Header } = Layout;

class Headers extends Component{

    render(){
        return(
            <Header style={{ background: '#fff', padding: 0 }} >
                <Icon
                    className="trigger"
                    type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={()=>this.props.changeToggle(this.props.collapsed)}
                    style={{'font-size': '18px','margin-left':'20px'}}
                />
            </Header>
        )
    }
}

const mapState = (state) => {
    return{
        collapsed:state.getIn(['headers','collapsed'])
    }
};

const mapDispatch = (dispatch) => {
    return {
        changeToggle(collapsed){
            dispatch(actionCreators.changeToggle(!collapsed));
        }
    }
};

export default connect(mapState,mapDispatch)(Headers);