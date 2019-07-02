import { createStore, combineReducers,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';

const composeEnhencers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//create a function to return store we created.
export default () => {
  //Store Creation
const store = createStore(
  combineReducers({
    auth:authReducer
  }),
  composeEnhencers(applyMiddleware(thunk))
);
  return store;
};


