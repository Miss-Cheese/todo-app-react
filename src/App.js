import './App.css'
import { useState } from "react"
import Dashboard from './components/Dashboard'
import Login from './components/Login'

function App() {
  const URL = 'http://localhost:3000'
  const [currentUser, setCurentUser] = useState(null)
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')


  const loginUser = async () => {
    console.log(userEmail, userPassword)
    const response = await fetch(`${URL}/users/login?user_email=${userEmail}&user_password=${userPassword}`, {
      method: "POST",
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      })
    })

    console.log(response)

    if (!response.ok) {
        const message = `Error: please log in or create an account`
        throw new Error(message);
    }

    const currentUser = await response.json()
    setCurentUser(currentUser)
    console.log(currentUser)
  }

  const logout = async () => {
    const response = await fetch(`${URL}/users/sign_out`, {
      method: "DELETE"
    })

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`
      throw new Error(message)
    }
    setCurentUser(null)
  }

  return (
    <div className="App">
      <Dashboard 
        currentUser={currentUser} 
      />
      <Login
        currentUser={currentUser} 
        loginUser={loginUser} 
        logout={logout}
        userEmail={userEmail} 
        setUserEmail={setUserEmail} 
        userPassword={userPassword}
        setUserPassword={setUserPassword}
      />
    </div>
  );
}

export default App;
