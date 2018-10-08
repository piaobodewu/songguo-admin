import React,{Component} from 'react';
import {HomeWrapper} from './style';
import Summary from './components/Summary';
import OrderChart from './components/OrderChart';

class Home extends Component{
    render(){
        return(
            <HomeWrapper>
                <Summary />
                <OrderChart />
            </HomeWrapper>
        )
    }
}

export default Home;

