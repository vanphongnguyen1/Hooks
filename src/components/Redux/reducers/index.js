import HobbyReducer from './Hobby'
import {combineReducers} from 'redux'
import UserReducer from './User'

const RootReducer = combineReducers({
    hobby: HobbyReducer,
    user: UserReducer,
})

export default RootReducer
