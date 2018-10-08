import styled from 'styled-components';
import { injectGlobal } from 'styled-components';

injectGlobal`
  //@font-face {
  //  font-family: 'Operator Mono';
  //}
  body {
    margin: 0;
    background-color: red;
  }
`;

export const headStyles = {
    'font-size': '13px'
};

export const bodyStyles = {
    'font-size':'22px',
    'margin-bottom':'20px',
    'padding-bottom':'25px',
};

export const HomeWrapper = styled.div`
    width:100%;
`;

export const SummaryWrapper = styled.div`
    width:100%;
`;

export const OrderChartTitle = styled.div`
    //margin: 10px 0 0 0;
    padding: 20px 30px 20px 50px;
    background: white;
    border-bottom: 1.3px solid #f5f5f5;
    font-size: 13px;
`;

export const OrderChartRate = styled.div`
    margin:10px 0 20px 0;
`;