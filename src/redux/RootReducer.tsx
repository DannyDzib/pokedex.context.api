import { combineReducers } from 'redux'
import homeReducer from './home/reducer';

const RootReducers = combineReducers({
    home: homeReducer
})

export default RootReducers