import { useEffect, useState } from 'react'
import './App.css'
import { MainPage } from './pages/MainPage'
import { SignIn } from './pages/signIn'

function App() {
  const [user, setUser] = useState(null)



  function signUp(data) {
    setUser(data)
    localStorage.token = data.token
  }
  function signOut() {
    setUser(null)
    localStorage.removeItem('token')
  }

  useEffect(() => {
    if (localStorage.token) {
      fetch('http://localhost:5000/validation', {
        headers: {
          Authorization: localStorage.token
        }
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.error) {
            alert(data.error)
          } else {
            signUp(data)
          }
        })
    }
  }, [])



  return (
    <div className="App">
      {user ? (<SignIn signOut={signOut} user={user} />) : (<MainPage signUp={signUp} />)}
    </div>
  )
}

export default App
