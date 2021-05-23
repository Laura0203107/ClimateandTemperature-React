import { createStore,applyMiddleware } from 'redux';
import reducers from './reducers/index'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
const initialState = {};
const middleware = [thunk];
const composeEnhancers = composeWithDevTools({ 
    trace: true, 
    traceLimit: 25 
}); 
export const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
    );