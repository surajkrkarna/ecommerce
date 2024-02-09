import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
function Login() {
    const [formVals, setFormVals] = useState({});
    const [alertVal, setAlertVal] = useState('');
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormVals({ ...formVals, [name]: value })
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const { username, password } = formVals;
            if (!username && !password) {
                alert('All fields are required');
            }
            else if (!username) {
                setAlertVal('Please enter username')
            } else if (!password) {
                setAlertVal('Please enter password')
            } else {
                const response = await axios.post('http://localhost:5006/api/login', formVals);
                console.log(response);
                localStorage.setItem('token', JSON.stringify(response.data));
                if (response.data.message !== 'Password or Username not matched!')
                    window.location.href = '/dashboard';
                setFormVals({})
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div style={{ marginLeft: '35rem', marginTop: '20rem', background: '#ffff00' }}>
            <form onSubmit={handleSubmit}>
                <input type='text' name='username' placeholder='username' value={formVals.username} onChange={handleChange} style={{ padding: '0.3rem' }} />
                <input type='password' name='password' placeholder='password' onChange={handleChange} style={{ padding: '0.3rem' }} /><br />
                {alertVal}
                <input type='submit' value='login' onChange={handleChange} style={{ padding: '0.3rem', marginLeft: '16rem', marginTop: '0.5rem', background: 'black', color: 'white', display: 'block' }} />
                <p style={{ background: 'white', textDecoration: 'underline', marginLeft: '5rem' }}>Proceed to<Link to='/register'>Register</Link></p>
            </form>
        </div>
    )
}

export default Login