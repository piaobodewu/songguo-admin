import React,{Component} from 'react';
import Summary from './components/Summary';
import {HomeWrapper} from './style';

class Home extends Component{
    render(){
        return(
            <HomeWrapper>
                <Summary />
            </HomeWrapper>
        )
    }
}

export default Home;

