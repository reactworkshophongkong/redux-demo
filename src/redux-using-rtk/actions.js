import { createAction } from '@reduxjs/toolkit'

import * as types from '../redux/types'

const addMessage = createAction(types.ADD_MESSAGE)

export { addMessage }