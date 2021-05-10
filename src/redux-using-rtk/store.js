import { configureStore } from '@reduxjs/toolkit'

// giving the import an alias , as the word reducer is being used too much and is confusing
import { reducer as messagesReducer, addMessageInProgressReducer } from './reducer'


// rtk includes dev tools by default
const store = configureStore({
  reducer: {
    messages: messagesReducer,
    addMessageInProgress: addMessageInProgressReducer
  }
})

export { store }
