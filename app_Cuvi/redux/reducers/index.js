import { combineReducers } from 'redux';

import InputReducer from './InputReducer';
import userReducer from './userReducer';

console.log('entro en Combine Reducers');
const reducers = combineReducers({
    inputState: InputReducer,
    user: userReducer,
})

export default reducers;