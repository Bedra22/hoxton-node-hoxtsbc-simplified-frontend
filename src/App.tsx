import { useState } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState(null)
  return (
    <div className="App">
      <h1>👋 WELCOME 👋</h1>
      <h2>Please sign in</h2>
      <form
        className='sign-up-form'
        onSubmit={event => {
          event.preventDefault()
          fetch('http://localhost:5000/sign-up', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: event.target.email.value,
              password: event.target.email.value
            })
          })
            .then(resp => resp.json())
        }}
      >
        <h2>Sign Up Form</h2>
        <label>
          Email: <input type='email' name='email' required />
        </label>

        <label >
          Password: <input type='password' name='password' required />
        </label>

        <button>
          Sign Up!!!
        </button>
      </form>

      <form
        className='log-in-form'
        onSubmit={event => {
          event.preventDefault()

          fetch('http://localhost:5000/log-in', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify({
              email: event.target.email.value,
              password: event.target.password.value
            })
          })
            .then(resp => resp.json())
        }}
      >
        <h2>Log In Form</h2>

        <label>
          Email: <input type='email' name='email' required />
        </label>

        <label >
          Password: <input type='password' name='password' required />
        </label>

        <button>
          Sign Up!!!
        </button>
      </form>
    </div>
  )
}

export default App
