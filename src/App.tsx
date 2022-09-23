import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {

  return (
    <div className="App">
      <h1>👋 WELCOME 👋</h1>
      <h2>Please sign in</h2>
      <form
        className='sign-up-form'
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
