import * as constants from './constants';
// fromJS将JS对象转化成immutable对象
// 使用immutable是为了  1: 防止改变action  2: 可以PureComponent代替Component提高app性能
import {fromJS} from 'immutable';

const defaultState = fromJS({
    summaryList: []
});

// immutable对象的set方法会集合之前immutable对象的值和设置的值，返回一个全新的对象
export default (state = defaultState , action) => {
    switch (action.type){
        case constants.GET_SUMMARY_LISTS:
            return state.set('summaryList',action.data);
        default:
            return state;
    }
};
