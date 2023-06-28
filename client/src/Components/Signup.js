import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'


function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [errorMessage, setErrorMessage] = useState("Enter your details to create an account");
  
  const updateMessage = (errorMessage) => {
    setErrorMessage("User already exists")
  }
  
  const history = useNavigate();

  async function submit(e){
    e.preventDefault()
    try{
      await axios.post('http://localhost:8000/signup', {
        email, password
      })
      .then(res => {
        if (res.data === "exist"){
          updateMessage()
        }
        else if (res.data === "notexist"){
          history("/home", {state: {id:email}})
        }
      })
      .catch(e => {
        setErrorMessage("wrong details")


      })
    }
    catch{
      
    }
  }

  return (
    <div className='login'>
      <h1>Signup</h1>
      <h3>{errorMessage}</h3>
      <form action='POST'>
        <input type="email" onChange={(e) => {setEmail(e.target.value)}} placeholder='Email'/>
        <input type="password" onChange={(e) => {setPassword(e.target.value)}} placeholder='Password'/>

        <input type='submit' onClick={submit}/>
      </form>
      <br />
      <p>OR</p>
      <Link to="/">LoginPage</Link>
    </div>
  )
}

export default Signup
