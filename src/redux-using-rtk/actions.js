import { createAction } from '@reduxjs/toolkit'

import * as types from '../redux/types'
import { apiCall } from '../service'

const addMessage = createAction(types.ADD_MESSAGE)

const addMessageAsync = () => {
  return async (dispatch, state) => {
    dispatch({ type: 'ADD_MESSAGE_IN_PROGRESS', value: true })

    try {
      const result = await apiCall()
      dispatch({ type: 'ADD_MESSAGE_IN_PROGRESS', value: false })
      dispatch(addMessage({value: result }))
    } catch (error) {
      console.log(error)
    }
  }
}

export { addMessage, addMessageAsync }