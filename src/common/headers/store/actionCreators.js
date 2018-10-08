import * as constants from './constants';
import {fromJS} from 'immutable';
import axios from 'axios';


export const changeToggle = (newCollapsed) => ({
    type: constants.CHANGE_TOGGLE,
    newCollapsed
});


//
// const changeList = (data) => ({
//     type: constants.CHANGE_LIST,
//     // 统一使用immutable类型，使用immutable是为了防止改变action
//     data: fromJS(data),
//     totalPage: Math.ceil(data.length / 10)
// });
//

//
//
// export const getList = () => {
//     // 通过使用redux-thunk实现可以返回函数
//     return (dispatch) => {
//         axios.get('/api/headerList.json').then((res)=>{
//             const data = res.data;
//             dispatch(changeList(data.data));
//         }).catch(()=>{
//             console.log("error");
//         })
//     }
// };