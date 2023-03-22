import  '../../../App.css';
import React, { useState , useEffect } from 'react';
import './SightUp.css'

function Login() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [error , setError] = useState('');

    const handleNameChange = (event) => {
      setName(event.target.value);
    };

    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
    
    const handleSighup = (event) => {
        event.preventDefault();
    
        // Call API to authenticate user
        fetch('http://enjudev.com/api/register', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: JSON.stringify({
                'name':name,
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
  

      function Alert() {
        const name = document.getElementById('name')
        const username = document.getElementById('username')
        const password = document.getElementById('password')
        const alert = document.getElementById('alert')
        const patternEmail = /^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/

       if (name.value.length === 0 || username.value.length === 0 || password.value.length === 0){
        alert.style.padding = '0px'
        alert.textContent = 'Vui lòng điền thông tin'
        alert.style.color = '#f01448' 
        alert.style.fontSize = '15px'
        alert.style.fontWeight = '700'
         } else{
           if (username.value.match(patternEmail)){
            alert.style.padding = '0px'
            alert.textContent = 'Đăng ký thành công'
            alert.style.color = '#5255fa' 
            alert.style.fontSize = '15px'
            alert.style.fontWeight = '700'
           }else{
            alert.style.padding = '0px'
            alert.textContent = 'Vui lòng điền địa chỉ Email hợp lệ'
            alert.style.color = '#f01448' 
            alert.style.fontSize = '15px'
            alert.style.fontWeight = '700'
           }       
         }
      }   
  

   return(
    <div className='sighin-form'>
      <form className='sighin-form-wrapper' onSubmit={handleSighup}> 
        <h1 className='sighin-form-header'>Đăng ký tài khoản</h1>
        <div className='name-sighin-form'>
          <label >Username:</label><br/>
          <input 
          id="name"
          className="input--sighin-form"
          type="text" 
          value={name} 
          onChange={handleNameChange} 
          />
        </div> 
        <div className='email-sighin-form'>
          <label>Email:</label><br/>
          <input 
          id="username"   
          className="input--sighin-form"
          type="text" 
          value={username} 
          onChange={handleUsernameChange} 
          />
        </div>
        <div className='password-sighin-form'>
          <label >Password:</label><br/>
          <input 
          id="password" 
          className="input--sighin-form"
          type="password" 
          value={password} 
          onChange={handlePasswordChange} />
        </div>
        {errorMessage && <div>{errorMessage}</div>}
        <button className='button-sighin-form' type="submit" onClick={Alert} >Đăng ký</button>
        <div id="alert" className='alert-sighin-form'></div> 
      </form>
    </div>
   )
}

export default Login;