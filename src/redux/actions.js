import { createAction } from '@reduxjs/toolkit'

import * as types from './types'

// const addMessage = message => {
//   return {
//     type: types.ADD_MESSAGE,
//     value: message
//   }
// }

const addMessage = createAction(types.ADD_MESSAGE)

export { addMessage }
