import { combineReducers } from 'redux';

import InputReducer from './InputReducer';
import userReducer from './userReducer';
import jobOfferReducer from './jobOfferReducer';

console.log('entro en Combine Reducers');
const reducers = combineReducers({
    inputState: InputReducer,
    user: userReducer,
    jobOffer: jobOfferReducer,
})

export default reducers;