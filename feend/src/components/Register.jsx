import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
function Register() {
    const [formValues,setFormValues]=useState({})
    const handleChange=(e)=>{
         const {name,value}=e.target;
        setFormValues({...formValues,[name]:value})
    }

    const handleSubmit=async(e)=>{
        try {
            e.preventDefault();
            await axios.post('http://localhost:5006/api/register',formValues);
        } catch (error) {
            alert(error.message)
        }

    }
  return (
        <div  style={{ marginLeft: '40rem', marginTop: '20rem', background:'#ffff00'}}>
        <form onSubmit={handleSubmit}>
            <input type='text' name='username' placeholder='email/username' onChange={handleChange}  style={{ padding: '0.3rem', width:'15rem'}}/><br/>
            <input type='password' name='password' placeholder='Password' onChange={handleChange}  style={{ padding: '0.3rem',width:'15rem' }}/><br/>
            <input type='password' name='confirmPassword' placeholder='ConfirmPassword' onChange={handleChange}  style={{ padding: '0.3rem',width:'15rem' }}/><br/>
            <input type='submit' value='Register' style={{ padding: '0.3rem',marginLeft:'12rem',marginTop:'0.5rem', background:'black', color:'white' }}/>
        </form>
        <p style={{ background: 'white', textDecoration:'underline', marginLeft: '2rem' }}>Proceed to<Link to='/login'>Login</Link></p>
        </div>
  )
}

export default Register