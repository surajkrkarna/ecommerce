import React from 'react'
import { Link } from 'react-router-dom'
function Linkss() {
  return (
    <div style={{ marginLeft:'1rem',background:'pink' }}>
        <Link to='/register'><button style={{ background:'green', color:'white', padding:'0.5rem', margin:'0.5rem' }}><b>Register</b></button></Link>
        <Link to='/login'><button style={{ background:'green', color:'white', padding:'0.5rem', transform: 'rotate(20deg)' }}><b>Login</b></button></Link>
    </div>
  )
}

export default Linkss