import React,{PureComponent} from 'react';
import { Card, Col, Row } from 'antd';
import {connect} from 'react-redux';
import {
    SummaryWrapper,
    headStyles,
    bodyStyles
} from '../style';
import {actionCreators} from "../store";

class Summary extends PureComponent{
    render(){
        const {list} = this.props;
        return(
            <SummaryWrapper>
                <Row gutter={16}>
                    <Col span={6}>
                        <Card title="今日下单量" bordered={false} headStyle={headStyles} bodyStyle={bodyStyles}>
                            {list.get(0)}
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card title="月下单量" bordered={false} headStyle={headStyles} bodyStyle={bodyStyles}>
                            {list.get(1)}
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card title="月活跃" bordered={false} headStyle={headStyles} bodyStyle={bodyStyles}>
                            {list.get(2)}
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card title="总注册量" bordered={false} headStyle={headStyles} bodyStyle={bodyStyles}>
                            {list.get(3)}
                        </Card>
                    </Col>
                </Row>
            </SummaryWrapper>
        )
    }

    componentDidMount(){
        // 页面axios初始化数据均在这启动
        this.props.getSummaryList();
    }

}

const mapState = (state) => ({
    list: state.getIn(['home','summaryList'])
});

const mapDispatch = (dispatch) => ({
    getSummaryList(){
        dispatch(actionCreators.getSummaryList())
    }
});

export default connect(mapState,mapDispatch)(Summary);