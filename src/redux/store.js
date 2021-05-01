import { createStore, combineReducers } from 'redux'

import { reducer } from './reducer'

const rootReducer = combineReducers({
  messages: reducer
})


//https://github.com/zalmoxisus/redux-devtools-extension#usage

const store = createStore(
  rootReducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export { store }
