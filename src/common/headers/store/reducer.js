// fromJS将JS对象转化成immutable对象
// 使用immutable是为了防止改变action
import {fromJS} from 'immutable';
import * as constants from "./constants";

const defaultState = fromJS({
    collapsed: false,
});

// immutable对象的set方法会集合之前immutable对象的值和设置的值，返回一个全新的对象
export default (state = defaultState , action) => {
    switch (action.type){
        case constants.CHANGE_TOGGLE :
            return state.set('collapsed',action.newCollapsed);
        default:
            return state;
    }
};