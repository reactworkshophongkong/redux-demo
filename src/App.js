import { useState } from 'react'
import { connect } from 'react-redux'
import { addMessage } from './redux/actions'

 
function App(props) {
  const [value, setValue] = useState('')
  const handleChange = e => {
    setValue(e.target.value)
  }

  const handleClick = () => {
    props.dispatchAddMessage(value)
    setValue('')
  }

  const isButtonDisabled = value === ''

  const messageList = props.messages.map(message => <li>{message}</li>)

  return (
    <div className="App">
        <p>Redux Demo</p>
        {messageList}
        <input type="text" onChange={handleChange} value={value} placeholder="Enter message..." />
        <button disabled={isButtonDisabled} onClick={handleClick}>Submit</button>
    </div>
  );
}

const mapStateToProps = state => ({
  messages: state.messages
})

const mapDispatchToProps = dispatch => ({
  dispatchAddMessage: message => dispatch(addMessage(message))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
