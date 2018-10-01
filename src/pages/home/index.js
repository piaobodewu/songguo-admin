import React,{Component} from 'react';
import Summary from './components/Summary';
import OrderChart from './components/OrderChart';
import {HomeWrapper} from './style';

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

