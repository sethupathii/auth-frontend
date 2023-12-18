// import React, { useState } from 'react'
// import { Container, Form, Button } from 'react-bootstrap'
// import '../styles/signUp.css'
// import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import { API_URL } from '../../config/global';



// const SignUp = () => {

//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         password: ""
//     })

//     // const navigate = useNavigate();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value })
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await axios.post(
//                 `${API_URL}/signin/verify`, formData
//             );
//             alert("Registration Link will sent your mailId please Check and Update")
//             console.log(response);

//             setFormData(
//                 {
//                     name: "",
//                     email: "",
//                     password: ""
//                 }
//             )

//         } catch (error) {
//             console.log(" Error During Registration", error);
//         }



//         // console.log(formData);

//     }

//     return (
//         <Container>
//             <h1>Registration Form</h1>
//             <Form onSubmit={handleSubmit}>
//                 <Form.Group>
//                     <Form.Label>Name:</Form.Label>
//                     <Form.Control type='text' name='name' value={formData.name} onChange={handleChange} required />
//                 </Form.Group>

//                 <Form.Group>
//                     <Form.Label>Email:</Form.Label>
//                     <Form.Control type='email' name='email' value={formData.email} onChange={handleChange} required />
//                 </Form.Group>

//                 <Form.Group>
//                     <Form.Label>Password:</Form.Label>
//                     <Form.Control type='password' name='password' value={formData.password} onChange={handleChange} required />
//                 </Form.Group>
//                 <Button type='submit' variant='primary'>Register</Button>
//                 <p>Already have an account  <Link to="./login">Login</Link>
//                 </p>

//             </Form>
//         </Container>
//     )
// }

// export default SignUp


import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import '../styles/signUp.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../config/global';

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState('');

    // const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${API_URL}/signin/verify`, formData);
            setMessage('Registration Link will be sent to your email, please check and update.');
            setShowMessage(true);
            console.log(response);

            setFormData({
                name: '',
                email: '',
                password: '',
            });
        } catch (error) {
            console.log('Error During Registration', error);
        }
    };

    return (
        <Container>
            <h1>Registration Form</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} required />
                </Form.Group>
                <Button type="submit" variant="primary">Register</Button>
                <p>
                    Already have an account <Link to="./login">Login</Link>
                </p>
            </Form>

            {showMessage && (
                <div className="message">
                    <p>{message}</p>
                    <button onClick={() => setShowMessage(false)}>Close</button>
                </div>
            )}
        </Container>
    );
};

export default SignUp;
