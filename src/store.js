import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk  from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer , productDetailReducer} from './reducers/productReducer'
const reducer = combineReducers({
    productList:productListReducer,
    productDetail:productDetailReducer,
})

const intialState = {}

const middleware = [thunk]

const store = createStore(reducer,intialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store