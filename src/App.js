import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from './redux/actions'

 
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

  const isButtonDisabled = value === ''

  const messageList = messages.map(message => <li>{message}</li>)

  return (
    <div className="App">
        <p>Redux Demo</p>
        {messageList}
        <input type="text" onChange={handleChange} value={value} placeholder="Enter message..." />
        <button disabled={isButtonDisabled} onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App
