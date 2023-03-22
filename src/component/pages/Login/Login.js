import  '../../../App.css';
import React, { useState , useEffect } from 'react';
import './Login.css'
import { Link } from "react-router-dom";

function SighUp() {
  const [username, setUsername] = useState('enjudev@outlook.com');
  const [password, setPassword] = useState('enjudev');
  const [token, setToken] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [users , setUser] = useState([]);
  const [error , setError] = useState('');


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };


  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Call API to authenticate user
    fetch('http://enjudev.com/api/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
            'email':username,
            'password':password,
        })
      })
        .then(response => response.json())
        .then(responseJson => {
            if(responseJson.message){
              setError(responseJson)
            } else {
              setToken(responseJson.token);
              localStorage.setItem("token", responseJson.token);
            }
        })
        .catch(error => {
                console.log(error)
        });
  };

  
  const getUserApi = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      return response.json()
    })
    .then(data => {
      setUser(data);
    })
  };
  
  // useEffect( () => {

  // },[token])


  function logOut() {
    localStorage.removeItem("token");
    setToken('');
  }

  return (
    <>
      <div className='login-form'>    
      { localStorage.getItem("token") ?
      
           <div className='logout-form-wrapper'>    
                    <Link className="logout-social-logo">
                          Chào mừng đến với
                          LOGO <i className="fa fa-cube logout" />
                    </Link>
                <button className='button-sighout-form' onClick={logOut}>Đăng xuất</button>   
           </div>          
        :  
            <form className='login-form-wrapper' onSubmit={handleSubmit}> 
                <h1 className='sighin-form-header'>Đăng nhập</h1> 
                <div className='email-sighin-form'>
                  <label>Username:</label><br/>
                  <input  
                  id="username"  
                  className="input--sighin-form"
                  type="text" 
                  value={username} 
                  onChange={handleUsernameChange} />
                </div>
                <div className='password-sighin-form'>
                  <label>Password:</label><br/>
                  <input 
                  id="password"
                  className="input--sighin-form"
                  type="password"
                  value={password} 
                  onChange={handlePasswordChange} />
                </div>
                {errorMessage && <div>{errorMessage}</div>}
                <button className='button-sighin-form' type="submit" >Đăng nhập</button>
                <div className='alert-sighin-form'>{error.message}</div> 
              </form>    
          } 
      </div>
     </>
  );
}

export default SighUp;
