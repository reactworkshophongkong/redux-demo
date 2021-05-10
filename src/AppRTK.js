import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from './redux-using-rtk/actions'

 
function AppRTK(props) {
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

  const isButtonDisabled = value === ''

  const messageList = messages.map(message => <li className="item">{message}</li>)

  return (
    <div className="App">
        <h1>Redux Demo with RTK</h1>
        <input className="input" type="text" onChange={handleChange} value={value} placeholder="Enter message..." />
        <button className="button" disabled={isButtonDisabled} onClick={handleClick}>Submit</button>
        {messageList}
    </div>
  );
}

export default AppRTK
