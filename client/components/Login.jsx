import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie';

function Login() {
    //declare state var to login
    const [ loginData, setLogin ] = useState({
        username:'',
        password:'',
    });

    const [ cookies, setCookies ] = useCookies(["username"]);
    //event handler that sets cookie to username & value loginData.username
    const handleCookies = () => {
        setCookies('username', loginData.username, {path: '/', secure: true})
    }

    //useNavigate is a react hook that's used to navigate to specified paths (lines 45, 48)
    const navigate = useNavigate();
    const handleChange = (e) => {
        //prevents entire page from reloading upon form submission
        e.preventDefault();
        const { name, value } = e.target;
        //changes the local state of name (includes username and password on lines 63, 69) in response to user input
        //use spread operator since name = username, password 
        setLogin({...loginData, [name]:value})
    }
    //event handler that that changes state upon form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        // check what route for get request for login
        try {
            const loginInfo = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:
                JSON.stringify(loginData)
        })
        //ok = property on response object that indicates whether the HTTP response status is within the range of 200-299
        if (loginInfo.ok) {
            handleCookies()
            //renders Homepage component + loads /homepage endpoint bc of line 15 on App.jsx
            //we set up a corresponding Route for '/homepage' in App.jsx where we defined routes
            navigate('/homepage')
        }
        else {
            navigate('/')
        }
    } catch(error) {
        console.error('Error in fetching data ', error)
    }
 }
        
    return(
        <div className='loginPageContainer'>

                <div className='loginCard'>
                    <h1 class="animate__animated animate__heartBeat animate__infinite">chartbeat</h1>
                    <h5 class="animate__rollIn animate__infinite animate__animated animate__faster">log in right here</h5>
                    <form className='loginInputForm' onSubmit={handleSubmit}>
                        <div className='loginLabelDiv'>
                            <label >Username: </label>
                        </div>
                        <div >
                            <input className='loginInput' type='text' name='username' placeholder='Enter Username' onChange={handleChange} value= {loginData.username}></input>
                        </div>
                        <div className='loginLabelDiv'>
                            <label >Password: </label>
                        </div>
                        <div>
                            <input className='loginInput' type='password' name = 'password' placeholder='Enter Password' onChange={handleChange}
                            value = {loginData.password}></input>
                        </div>
                        <div className='loginBtn'>
                            <button type='submit'><p>Sign in</p></button>
                        </div>
                        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                    </form>
                </div>

        </div>
    )
}
export default Login;