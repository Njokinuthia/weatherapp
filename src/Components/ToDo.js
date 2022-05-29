import React, { useState } from 'react';
import {createUserWithEmailAndPassword , 
  onAuthStateChange, 
  onAuthStateChanged,
  signOut
} from "firebase/auth"
import {auth} from "../firebase-config"
import {useHistory} from "react-router-dom"



function ToDO() {

  const [login, setLogin] = useState(true)

  const[userLoggedIn , setUserLoggedIn] = useState({})

  const history = useHistory();

  // onAuthStateChanged(auth,(currentUser)=>{
  //   setUserLoggedIn(currentUser)
  // })


  function toggleForms(event) {
    event.preventDefault()
    console.log(login)
    setLogin(hideForm => !hideForm)
    login ? console.log("login") : console.log("new account")
  }
  // firebase
  // async function logout() {
  //   await signOut(auth)

  // }

  function logout() {
    auth.signOut()
    history.push("/")

  }

  function Login() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    async function login() {

    }

    function handleLoginSubmit(event) {
      event.preventDefault()
      const formData = {
        name: name,
        password: password
      }
      console.log(formData)
      // sendDataSomewhere(formData)
      setName("")
      setPassword("")
    }

    return (
      <form className="formContainer" onSubmit={handleLoginSubmit}>
        <h1>Login</h1>
        <div>
          <div >
            <input type="text" placeholder="Username" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="btn">Continue</button>
        </div>
        <p>
          <a onClick={toggleForms} href="./" >Don't have an account? Create account</a>
        </p>
      </form>

    )
  }

  function CreateAccount() {

    const [newName, setNewName] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [email, setEmail] = useState("")

    // firebase
    async function register() {
      try{
        const user = await createUserWithEmailAndPassword(auth,email,newPassword)
        console.log(user)
      }
      catch(error){
        console.log(error.message)
      }

    }


    function handleNewAccountSubmit(event) {
      event.preventDefault()
      const formData = {
        name: newName,
        password: newPassword,
        email: email
      }
      console.log(formData)
      // sendDataSomewhere(formData)
      setNewName("")
      setNewPassword("")
      setEmail("")
    }

    return (
      <>
        <form className="formContainer" onSubmit={handleNewAccountSubmit}>
          <h1 >Create Account</h1>
          <div>

            <div>
              <input type="text" placeholder="Username" value={newName} onChange={(e) => setNewName(e.target.value)} required />
            </div>
            <div >
              <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
              <input type="password" placeholder="Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
            </div>
            <div>
              <input type="password" placeholder="Confirm password" required />
            </div>
            <button onClick={register} type="submit" className="btn">Create</button>
          </div>
          <p>
            <a onClick={toggleForms} href="./" >Already have an account? Sign in</a>
          </p>
        </form>

      </>
    )

  }


  return (
    <div className="form">
      {login ? <Login  /> : <CreateAccount />}
      {/* <h3>Welcome back</h3>{userLoggedIn.email} */}
      {/* <button onClick={logout}>Signout</button> */}
    </div>
  )

}
export default ToDO
