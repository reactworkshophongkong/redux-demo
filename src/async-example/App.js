import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage, addMessageAsync } from '../redux-using-rtk/actions'
import { apiCall } from '../service'

function AppRTK(props) {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const messages = useSelector(state => state.messages)
  const addMessageInProgress = useSelector(state => state.addMessageInProgress)

  const handleChange = e => {
    setValue(e.target.value)
  }

  const handleClick = () => {
    dispatch(addMessage({ value }))
    setValue('')
  }

  const handleClickWithReduxThunk = () => {
    dispatch(addMessageAsync())
  }

  const isButtonDisabled = value === ''

  const messageList = messages.map(message => <li className="item">{message}</li>)

  const handleAsyncAddMessageWithoutThunk = async () => {
    try {
      dispatch({ type: 'ADD_MESSAGE_IN_PROGRESS', value: true })
      const result = await apiCall()
      dispatch({ type: 'ADD_MESSAGE_IN_PROGRESS', value: false })
      dispatch(addMessage({ value: result }))

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
        <h1>Redux Demo with RTK</h1>
        <input className="input" type="text" onChange={handleChange} value={value} placeholder="Enter message..." />
        <button className="button" disabled={isButtonDisabled} onClick={handleClick}>Submit</button>
        <br />
        <br />
        <button className="button" disabled={addMessageInProgress} onClick={handleAsyncAddMessageWithoutThunk}>Submit Async</button>
        <button className="button" disabled={addMessageInProgress} onClick={handleClickWithReduxThunk}>Submit Async with redux-thunk</button>
        {messageList}
    </div>
  );
}

export default AppRTK
