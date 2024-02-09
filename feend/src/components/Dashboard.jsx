import React,{useEffect, useState, useMemo} from 'react'
import axios from 'axios'

function Dashboard() {
    const token=JSON.parse(localStorage.getItem('token'))
    const [password,setPassword]=useState('xxxxx')
    const [value,setValue]=useState(null);

    const doubleNumber=useMemo(()=>{return (()=>{
        let i=0;
        for(i=0;i<1000000000;i++){}
        console.log(value)
        return 2*value;
    })()},[value]);

    const handleShowPassword=async(e)=>{
        try {
            const response= await axios.get('http://localhost:5006/api/password', {headers:{
                 "Content-Type":'application/json',
                 "Authorization":`Bearer ${token.token}`
            }});
            setPassword(response.data.password);
        } catch (error) {
            alert(error);
            if(error.response.status===403){
                localStorage.clear();
                window.location.href='/login'
            }
        } 

    }
    useEffect(()=>{
        if(!token){
            window.location.href='/login'
        }
    },[token])

  return (
    <div>
        <button onClick={handleShowPassword}>Show Password</button>
        <div>{password}</div>
        <div className="doubleNo">
        <input type='number' placeholder='Input Number' onChange={(e)=>setValue(parseInt(e.target.value))} className='border border-1 border-red-500'/>
    {doubleNumber}
        </div>
    </div>
  )
}

export default Dashboard