import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import '../styles/home.css';
import { API_URL } from '../../config/global';
import axios from 'axios'

import { Link, useNavigate } from 'react-router-dom'

const Home = () => {

  const [ress, setRess] = useState({})

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"))
    if (user && user.token) {
      getData(user.token)
    }
  }, [])

  const getData = async (token) => {
    try {
      const config = {
        headers: {
          Authorization: token
        }
      }
      // const response = await axios.get(`${API_URL}/home`, config);
      const response = await axios.get(`${API_URL}/homes`, config);
      console.log('Request URL:', `${API_URL}/homes`);

      if (response.data === "Invalid Token") {
        alert("login again")
      } else if (response.data === "Server Busy") {
        alert("unauthorized access");
      } else if (response?.status) {
        setRess(response.data);
      }

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  const navigate = useNavigate();
  const Clicked = () => {
    window.open('https://www.google.com/', '_blank');
  }

  return (
    <Container>
      <h1>Welcome to our Website</h1>
      <p> We are here to serve you</p>
      <p>{ress.name}</p>
      <Button type='submit' variant='primary' onClick={Clicked}>Get Started</Button>
    </Container>
  )
}

export default Home



