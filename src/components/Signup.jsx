import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { newUser } from '../services/allapi';



function Signup() {

  const navigate=useNavigate()

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: ""
  })

   const getinputs=(e)=>{
    const {name,value}=e.target
    setInputs({...inputs,[name]:value})
  }
  console.log(inputs);


  const handlesubmit=async(e)=>{
    e.preventDefault()
    const {name,email,password}=inputs

    if(!name||!email||!password){
      alert("please fill the form")
    }else{
      const result=await newUser({name,email,password})
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

          <h2 className='d-flex justify-content-center align-items-center mb-4 '>Register</h2>

          <form>

            <FloatingLabel controlId="floatingInput" label="Name" className="mb-3 ">
              <Form.Control name='name' value={inputs.value} onChange={e=>{getinputs(e)}}  type="text" placeholder="Name" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3">
              <Form.Control name='email' value={inputs.value} onChange={e=>{getinputs(e)}}  type="email" placeholder="Email" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingPassword" label="Password" className='mb-3'>
              <Form.Control name='password' value={inputs.value} onChange={e=>{getinputs(e)}}  type="password" placeholder="Password" />
            </FloatingLabel>

            <button onClick={e=>{handlesubmit(e)}} className='btn btn-primary w-100 rounded-4 mb-4 '>Register</button>

            
          </form>

          <p>Already Have an Account?</p>

          <Link to='/login' className='btn btn-default w-100 rounded-4 bg-light'>Login</Link>

        </div>

      </div>
    </>
  )
}

export default Signup