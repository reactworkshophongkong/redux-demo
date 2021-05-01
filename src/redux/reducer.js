import * as types from './types'

const reducer = (state = [], action) => {
  switch(action.type) {
    case types.ADD_MESSAGE: {
      return [
        ...state,
        action.value
      ]
    }

    default: 
      return state
  }
}

export { reducer }
