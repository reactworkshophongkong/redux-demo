import * as types from './types'

const addMessage = message => {
  return {
    type: types.ADD_MESSAGE,
    value: message
  }
}

export { addMessage }
