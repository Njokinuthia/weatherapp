import React , {useState} from 'react';



function ToDO(){
  const[user,setUser]= useState(null)

  return(
    <div>      
      <h2>My to-do create account /sign in  form goes here</h2>
      <div>
      <h1>Login</h1>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
    </div>
  )

}
export default ToDO