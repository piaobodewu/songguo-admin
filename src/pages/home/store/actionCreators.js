import * as constants from './constants';
import {fromJS} from 'immutable';
import axios from 'axios';

const getSummaryLists = (data) => ({
    type: constants.GET_SUMMARY_LISTS,
    data: fromJS(data)
});

// export const searchFocus = () => ({
//     type: constants.SEARCH_FOCUS
// });

export const getSummaryList = () => {
    // 通过使用redux-thunk实现可以返回函数
    return (dispatch) => {
        axios.get('/api/getSummaryList.json').then((res)=>{
            const data = res.data;
            dispatch(getSummaryLists(data.data));
        }).catch(()=>{
            console.log("error");
        })
    }
};