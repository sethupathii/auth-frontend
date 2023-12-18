// import React, { useState } from 'react'
// import { Container, Form, Button } from 'react-bootstrap'
// // import '../styles/Login.css'
// import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import { API_URL } from '../../config/global';

// const Login = () => {


//   const [formData, setFormData] = useState({
//     email: "",
//     password: ""
//   })

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         `${API_URL}/login`, formData
//       );
//       console.log(response);
//     } catch (error) {
//       console.log(" Error During Registration", error);
//     }

//     // console.log(formData);

//     // setFormData(
//     //   {
//     //     email: "",
//     //     password: ""
//     //   }
//     // )
//   }

//   return (

//     <Container>
//       <h1>Login Form</h1>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group>
//           <Form.Label>Email:</Form.Label>
//           <Form.Control type='email' name='email' value={formData.email} onChange={handleChange} required />
//         </Form.Group>

//         <Form.Group>
//           <Form.Label>Password</Form.Label>
//           <Form.Control type='password' name='password' value={formData.password} onChange={handleChange} required />
//         </Form.Group>
//         <Button type='submit' variant='primary'>Login</Button>
//       </Form>
//     </Container>

//   )
// }

// export default Login



import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
import { API_URL } from '../../config/global';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/login`, formData);
      console.log(response);
      if (response.data === "Invalid User name or Password") {
        alert("Invalid User name or Password");
      } else if (response.data === "Server Busy") {
        alert("Verify Your email id");
      } else if (response?.status) {
        localStorage.setItem("userInfo", JSON.stringify(response.data))
        navigate('/home');
      }
    } catch (error) {
      console.log('Error during login:', error);
    }
  };

  return (
    <Container>
      <h1>Login Form</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;

