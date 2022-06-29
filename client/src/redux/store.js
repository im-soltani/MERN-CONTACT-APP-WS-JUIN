import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { contactReducer } from "./reducers/contactReducers"
import { composeWithDevTools } from 'redux-devtools-extension';


const middleware=[thunk]
const store =createStore(contactReducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store