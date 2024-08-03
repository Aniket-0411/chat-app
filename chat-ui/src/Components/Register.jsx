import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components"
import Logo from "../assets/react.svg"

function Register() {
    const Formcontainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    background-color: #131324;
    .brand {
      display: flex;
      align-items: center;
      gap: 1rem;
      justify-content: center;
      img {
        height: 5rem;
      }
      h1 {
        color: white;
        text-transform: uppercase;
      }
    }
  
    form {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      background-color: #00000076;
      border-radius: 2rem;
      padding: 3rem 5rem;
    }
    input {
      background-color: transparent;
      padding: 1rem;
      border: 0.1rem solid #4e0eff;
      border-radius: 0.4rem;
      color: white;
      width: 100%;
      font-size: 1rem;
      &:focus {
        border: 0.1rem solid #997af0;
        outline: none;
      }
    }
    button {
      background-color: #4e0eff;
      color: white;
      padding: 1rem 2rem;
      border: none;
      font-weight: bold;
      cursor: pointer;
      border-radius: 0.4rem;
      font-size: 1rem;
      text-transform: uppercase;
      &:hover {
        background-color: #4e0eff;
      }
    }
    span {
      color: white;
      text-transform: uppercase;
      a {
        color: #4e0eff;
        text-decoration: none;
        font-weight: bold;
      }
    }
  `;
  
  const handleSubmit = (event)=>{
    event.preventDefault();
    alert("form");
  }
  const handleChange = (event) => {
    
  }


    return (
    <>
        <Formcontainer>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="brand">
                    <img src={Logo} alt="logo"/>
                    <h1>Hike</h1>
                </div>
                <input type='text' placeholder='Username' name='Username' onChange={(e)=>handleChange(e)}
                />
                <input type='email' placeholder='Email' name='Email' onChange={(e)=>handleChange(e)}
                />
                <input type='password' placeholder='Password' name='Password' onChange={(e)=>handleChange(e)}
                />
                <input type='Password' placeholder='Confirm Password' name='Confirm Password' onChange={(e)=>handleChange(e)}
                />
                <button type="Submit">Create User</button>
                <span>already have an account ? <Link to="/login">Login</Link></span>
            </form>
        </Formcontainer>
    </>
  )
}

export default Register;