import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage, addMessageAsync, fakeApiCall } from './redux/actions'
import * as types from './redux/types'
 
function App(props) {
  const [value, setValue] = useState('')

  const dispatch = useDispatch()
  const messages = useSelector(state => state.messages)

  const handleChange = e => {
    setValue(e.target.value)
  }

  const handleClick = () => {
    dispatch(addMessage({ value }))
    setValue('')
  }

  const handleAsyncAddMessage = () => {
    dispatch(addMessageAsync({ value }))
    setValue('')
  }

  const handleAsyncAddMessageWithoutThunk = async () => {
    try {
      dispatch({ type: types.ADD_MESSAGE_IN_PROGRESS, value: true })
      
      const result = await fakeApiCall(value)

      dispatch({ type: types.ADD_MESSAGE_IN_PROGRESS, value: false })
      dispatch(addMessage({ value: result}))

    } catch (error) {
      console.log(error)
    }
  }

  const isButtonDisabled = value === ''

  const messageList = messages.map(message => <li>{message}</li>)

  return (
    <div className="App">
        <p>Redux Demo</p>
        {messageList}
        <input type="text" onChange={handleChange} value={value} placeholder="Enter message..." />
        <button disabled={isButtonDisabled} onClick={handleClick}>Submit</button>
        <button disabled={isButtonDisabled} onClick={handleAsyncAddMessageWithoutThunk}>Submit Async version</button>
    </div>
  );
}

export default App
