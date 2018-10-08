// 总reducer
import { combineReducers } from 'redux-immutable';
// import { reducer as sidePullReducer} from '../common/sidePull/store';
import { reducer as headersReducer} from '../common/headers/store';
import { reducer as homeReducer} from '../pages/home/store';
import { reducer as schoolReducer} from '../pages/school/store';
import { reducer as AccountUserReducer} from '../pages/accountUser/store';

const reducer =  combineReducers({
    // sidePull:sidePullReducer,
    headers:headersReducer,
    home: homeReducer,
    school: schoolReducer,
    accountUser:AccountUserReducer
});

export default reducer;