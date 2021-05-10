import { useState } from 'react'
import { useDispatch, useSelector, connect } from 'react-redux'
import { addMessage } from './redux/actions'
import { addMessage as addMessageRTK } from './redux-using-rtk/actions'

 
function App(props) {
  const [value, setValue] = useState('')
  // const dispatch = useDispatch()
  // const messages = useSelector(state => state.messages)

  const handleChange = e => {
    setValue(e.target.value)
  }

  const handleClick = () => {
    // using useDispatch
    // dispatch(addMessage(value))

    // using connect
    props.dispatchAddMessage(value)
    setValue('')
  }

  const isButtonDisabled = value === ''

  // using useSelector
  // const messageList = messages.map(message => <li>{message}</li>)

  // using connect
  const messageList = props.messages.map(message => <li className="item">{message}</li>)

  return (
    <div className="App">
        <h1>Redux Demo</h1>
        <input type="text" onChange={handleChange} value={value} placeholder="Enter message..." />
        <button disabled={isButtonDisabled} onClick={handleClick}>Submit</button>
        {messageList}
    </div>
  );
}

// using useDispatch / useSelector api
// export default App

const mapStateToProps = state => ({
  messages: state.messages
})

const mapDispatchToProps = dispatch => ({
  dispatchAddMessage: message => dispatch(addMessage(message))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
