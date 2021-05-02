import { configureStore } from '@reduxjs/toolkit'

// giving the import an alias , as the word reducer is being used too much and is confusing
import { addMessageInProgressReducer, reducer as messagesReducer } from './reducer'

// const rootReducer = combineReducers({
//   messages: reducer
// })


//https://github.com/zalmoxisus/redux-devtools-extension#usage

const store = configureStore({
  reducer: {
    messages: messagesReducer,
    addMessageInProgress: addMessageInProgressReducer
  }
})

export { store }
