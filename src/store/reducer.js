// 总reducer
import { combineReducers } from 'redux-immutable';
import { reducer as homeReducer} from '../pages/home/store';
import { reducer as schoolReducer} from '../pages/school/store';

const reducer =  combineReducers({
    home: homeReducer,
    school: schoolReducer
});

export default reducer;