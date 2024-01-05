import React from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SignUp() {
    const [ signUp, setSignUp ] = useState({
        firstName:'',
        lastName:'',
        username:'',
        password:'',
    })
    const navigate = useNavigate();
    const handleChange = (e) => {
        e.preventDefault();
        try {
            const { name, value } = e.target;
            setSignUp({...signUp, [name]:value})
        } catch(error) {
            console.error('error occurred in extracting values from form')
        }
    }
    const handleCancel = (e) => {
        navigate('/')
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userInfo = await fetch('http://localhost:3000/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signUp)
            })
            navigate('/')
        } catch (error) {
            console.error('Error in signing up')
        }
    }
    return(
        <div>
            <div className='signUpPageContainer'>
                <div className='signUpCard'>
                <h1 class="animate__animated animate__heartBeat animate__infinite">chartbeat</h1>
                    <h2 className='signUpTitle'>make an account</h2>
                    <h3 className='signuph3' class='animate__hinge animate__infinite animate__faster' style={{fontWeight: 500}}> right down here</h3>
                    <form method='post' className='signUpForm' onSubmit={handleSubmit}>
                        <div >
                            <input className='signUpInput' type='text' name='firstName' placeholder='First Name' onChange={handleChange}></input>
                        </div>
                        <div >
                            <input className='signUpInput' type='text' name='lastName' placeholder='Last Name' onChange={handleChange}></input>
                        </div>
                        <div >
                            <input className='signUpInput' type='text' name='username' placeholder='Create Username' onChange={handleChange}></input>
                        </div>
                        <div >
                            <input className='signUpInput' type='password' name='password' placeholder='Create Password' onChange={handleChange}></input>
                        </div>
                        <div className='signUpButtons'>
                            <button className='signUpSubmitBtn' type='submit'>Submit</button>
                            <button className='signUpCancelBtn' type='button' onClick={handleCancel}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp;