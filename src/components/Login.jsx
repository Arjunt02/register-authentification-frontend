import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/allapi';


function Login() {

  const navigate=useNavigate()

  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  })

   const getinputs=(e)=>{
    const {name,value}=e.target
    setInputs({...inputs,[name]:value})
  }
  console.log(inputs)


  const handlesubmit=async(e)=>{
    e.preventDefault()
    const {email,password}=inputs

    if(!email||!password){
      alert("please fill the form")
    }else{

      const result=await loginUser({email,password})
      console.log(result);

      if(result.status===200){
        navigate('/home')
      }
      else{
        alert("request failed")
      }
    

    }
    
  }

  return (
    <>
      <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
        <div className='bg-white p-3 rounded w-25' >

          <h2 className='d-flex justify-content-center align-items-center mb-4 '>Login</h2>

          <form>

            <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3">
              <Form.Control name='email' value={inputs.value} onChange={e=>{getinputs(e)}}  type="email" placeholder="Email" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingPassword" label="Password" className='mb-3'>
              <Form.Control name='password' value={inputs.value} onChange={e=>{getinputs(e)}}  type="password" placeholder="Password" />
            </FloatingLabel>

            <button onClick={e=>{handlesubmit(e)}} className='btn btn-primary w-100 rounded-4 mb-4 '>Login</button>
            

            
          </form>


        </div>

      </div>
    </>
  )
}

export default Login