import { createAction } from '@reduxjs/toolkit'

import * as types from './types'

// const addMessage = message => {
//   return {
//     type: types.ADD_MESSAGE,
//     value: message
//   }
// }

const fakeApiCall = message => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(message)
    }, 3000)
  })
}

const addMessage = createAction(types.ADD_MESSAGE)

const addMessageAsync = (message) => {
  return async (dispatch, state) => {
    dispatch({ type: types.ADD_MESSAGE_IN_PROGRESS, value: true })

    try {
      const result = await fakeApiCall(message)
      dispatch({ type: types.ADD_MESSAGE_IN_PROGRESS, value: false })
      dispatch(addMessage(result))
    } catch (error) {
      console.log(error)
    }
  }
}

export { addMessage, addMessageAsync, fakeApiCall }
