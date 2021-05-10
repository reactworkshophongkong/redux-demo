import { createReducer } from '@reduxjs/toolkit'

import * as types from '../redux/types'

const reducer = createReducer([], builder => {
  builder
    .addCase(types.ADD_MESSAGE, (state, action) => {
      // reduxtoolkit uses immer library to allow reducers that mutate
      // it handles making changes to state immutable for you
      // also value is off payload property, as we create reduxtoolkit createAction utility
      state.push(action.payload.value)
    })
})





const addMessageInProgressReducer = createReducer(false, builder => {
  builder
    .addCase('ADD_MESSAGE_IN_PROGRESS', (state, action) => {
      return action.value
    })
})

export { reducer, addMessageInProgressReducer }