import React,{Component} from 'react';
import { Row, Col , Progress} from 'antd';
import {OrderChartTitle,OrderChartRate} from '../style';
import {
    Chart,
    Geom,
    Axis,
    Tooltip,
    Legend
} from 'bizcharts';
import DataSet from '@antv/data-set';

class OrderChart extends Component {
    render() {
        const data = [
            {
                month: "Jan",
                目标: 7.0,
                实际: 3.9
            },
            {
                month: "Feb",
                目标: 6.9,
                实际: 4.2
            },
            {
                month: "Mar",
                目标: 9.5,
                实际: 5.7
            },
            {
                month: "Apr",
                目标: 14.5,
                实际: 8.5
            },
            {
                month: "May",
                目标: 18.4,
                实际: 11.9
            },
            {
                month: "Jun",
                目标: 21.5,
                实际: 15.2
            },
            {
                month: "Jul",
                目标: 25.2,
                实际: 17.0
            },
            {
                month: "Aug",
                目标: 26.5,
                实际: 16.6
            },
            {
                month: "Sep",
                目标: 23.3,
                实际: 14.2
            },
            {
                month: "Oct",
                目标: 18.3,
                实际: 10.3
            },
            {
                month: "Nov",
                目标: 13.9,
                实际: 6.6
            },
            {
                month: "Dec",
                目标: 9.6,
                实际: 4.8
            }
        ];
        const ds = new DataSet();
        const dv = ds.createView().source(data);
        dv.transform({
            type: "fold",
            fields: ["目标", "实际"],
            // 展开字段集
            key: "city",
            // key字段
            value: "temperature" // value字段
        });
        console.log(dv);
        const cols = {
            month: {
                range: [0, 1]
            }
        };
        return (
            <div>
                <Row>
                    <OrderChartTitle>
                        各月化订单量
                    </OrderChartTitle>
                </Row>
                <Row style={{'padding':'20px 20px 0px 0px','background':'white'}}>
                    <Col xl={19} md={19} xs={24}>
                        <div>
                            {/*echarts容器不能设置为百分比,必须具体长度。设置最大宽度即可*/}
                            <Chart height={400} data={dv} style={{'maxWidth':'1000px'}} scale={cols} forceFit>
                                <Legend />
                                <Axis name="month" />
                                <Axis
                                    name="temperature"
                                    label={{
                                        formatter: val => `${val}K`
                                    }}
                                />
                                <Tooltip
                                    crosshairs={{
                                        type: "y"
                                    }}
                                />
                                <Geom
                                    type="line"
                                    position="month*temperature"
                                    size={2}
                                    color={"city"}
                                    shape={"smooth"}
                                />
                                <Geom
                                    type="point"
                                    position="month*temperature"
                                    size={4}
                                    shape={"circle"}
                                    color={"city"}
                                    style={{
                                        stroke: "#fff",
                                        lineWidth: 1
                                    }}
                                />
                            </Chart>
                        </div>
                    </Col>
                    <Col xs={2} sm={2} md={0} lg={0} xl={0} >
                    </Col>
                    <Col xl={5} md={5} sm={20} xs={20}>
                        <OrderChartRate>
                            <h1>月订单增长率</h1>
                            <Progress percent={70} status="active" />
                        </OrderChartRate>
                        <OrderChartRate>
                            <h1>月订单增长率</h1>
                            <Progress percent={50} status="active" />
                        </OrderChartRate>
                        <OrderChartRate>
                            <h1>月订单增长率</h1>
                            <Progress percent={80} status="active" />
                        </OrderChartRate>
                        <OrderChartRate>
                            <h1>月订单增长率</h1>
                            <Progress percent={50} status="active" />
                        </OrderChartRate>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default OrderChart;