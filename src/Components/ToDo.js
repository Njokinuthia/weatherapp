import React, { useState } from 'react';



function ToDO() {

  const [login, setLogin] = useState(true)

  function toggleForms(event) {
    event.preventDefault()
    console.log(login)
    setLogin(hideForm => !hideForm)
    login ? console.log("login") : console.log("new account")
  }

  function Login() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

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
        <div >
          <input type="text" placeholder="Username" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn">Continue</button>

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
          <button type="submit" className="btn">Continue</button>
          <p>
            <a onClick={toggleForms} href="./" >Already have an account? Sign in</a>
          </p>
        </form>

      </>
    )

  }


  return (
    <div className="form">
      {login ? <Login /> : <CreateAccount />}
    </div>
  )

}
export default ToDO
