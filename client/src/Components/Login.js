import { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('Enter your details')

  const history = useNavigate();

  async function submit(e){
    e.preventDefault()
    try{
      const setErrorMessageDisplay = ()=>{
        setErrorMessage("User does not exist")
      }

      await axios.post('http://localhost:8000/', {
        email, password
      })
      .then(res => {
        if (res.data === "exist"){
          history("/home", {state: {id:email}})
        }
        
        else if (res.data === "notexist"){
          setErrorMessageDisplay()
        }
      })
      .catch(e => {
        setErrorMessage("Wrong input!")
        setErrorMessageDisplay()
      })
    }
    catch{
      
    }
        
  }

  return (
    <div className='login'>
      <h1>Login</h1>
      <h3>{errorMessage}</h3>
      <form action='POST'>
        <input type="email" onChange={(e) => {setEmail(e.target.value)}} placeholder='Email'/>
        <input type="password" onChange={(e) => {setPassword(e.target.value)}} placeholder='Password'/>

        <input type='submit' onClick={submit}/>
      </form>
      <br />
      <p>OR</p>
      <Link to="/signup">Signup Page</Link>
    </div>
  )
}

export default Login
