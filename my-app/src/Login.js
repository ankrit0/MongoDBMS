import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    console.log("object")
    try {
      const data = {
        username: username,
        password: password
      };
      console.log(data)
      const response = await axios.post('http://localhost:3001/login', data);
  
      alert("Login successful")
      console.log(response.data.message); 
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
        console.error('Error logging in:', error.response.data.message);
      } else {
        console.log(error.message)
        console.error('An error occurred:', error.message);
      }
    }
  };
  const handleRegister = async () => {
    try {
      const data = {
        username: username,
        password: password
      };
  
      const response = await axios.post('http://localhost:3001/register', data);
      alert("Registered successful")
      console.log(response.data.message);
    } catch (error) {
      if (error.response) {
        console.error('Error logging in:', error.response.data.message);
        alert(error.response.data.message)
      } else {
        console.error('An error occurred:', error.message);
        alert(error.message)
      }
    }
  };

  // const handleDelete = async () => {
  //   try {
  //     const data = {
  //       username: username,
  //       password: password
  //     };
  
  //     const response = await axios.post('http://localhost:3001/delete', data);
  //     alert("Deleted successful")
  //     console.log(response.data.message);
  //   } catch (error) {
  //     if (error.response) {
  //       console.error('Error logging in:', error.response.data.message);
  //     } else {
  //       console.error('An error occurred:', error.message);
  //     }
  //   }
  // };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:3001/delete/${username}`);
      alert("User deleted successfully");
      console.log(response.data);
    } catch (error) {
      if (error.response) {
        console.error('Error deleting user:', error.response.data);
      } else {
        console.error('An error occurred:', error.message);
      }
    }
  };
  

  const handleReset = async () => {
    try {
      const data = {
        username: username,
        password: password
      };
  
      const response = await axios.post('http://localhost:3001/api/auth/resetpassword', data);
      alert("Reset successful")
      console.log(response.data.message);

      console.log(response.data.message);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        console.error('Error logging in:', error.response.data.message);
      } else {
        console.error('An error occurred:', error.message);
      }
    }
  };
  

  return (
    <div style={{backgroundColor:'lightblue', height:'100vh', width:'100vw'}}>
      <h2>LOGIN FORM</h2>
      <div style={{justifyContent:'space-between', height:'200px', backgroundColor:'cadetblue', display:'flex-col', flexDirection:'column', justifyItems:'center',alignItems:'center',}}>
        <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <div>
      <button style={{color:'white',backgroundColor:'blue'}} onClick={handleLogin}>Login</button>
      <button style={{color:'white',backgroundColor:'green'}} onClick={handleRegister}>Register</button>
      <button style={{color:'black',backgroundColor:'lightgray'}} onClick={handleReset}>Reset password</button>
      <button style={{color:'white',backgroundColor:'red'}} onClick={handleDelete}>Delete account</button>

      </div>
      </div>

    </div>
  );
};

export default Login;
