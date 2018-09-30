import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const Logo = styled.div`
    height: 55px;
    width: 55px;
    margin: 0 auto;
    background-repeat: no-repeat;
    background:url(${logoPic});
    background-size: cover;
`;