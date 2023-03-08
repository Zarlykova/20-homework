import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { authActions } from '../store/authSlice'


export const Login = ({openCalculatorPage}) => {
const [login, setLogin] = useState({
 email: "",
 password: ""
})
const dispatch = useDispatch()

const inputChangeHandler = (name) => {
return(event) => {
 setLogin(prevS => ({ ...prevS, [name]: event.target.value}))
}
}
const submitHandler = (e) => {
 e.preventDefault()
 if(login.email.includes(" @ ") && login.password.trim().length > 4){
   dispatch(authActions.login(login.email))
 }
}

  return (
    <Form onSubmit={submitHandler}>
     <Input 
       type="email"
       placeholder='email'
       value={login.email}
       onChange={inputChangeHandler("email")}
       required
       />
     <Input 
       type="password"
       placeholder='password'
       value={login.password}
       onChange={inputChangeHandler("password")}
       required
       />
     <Button onClick={openCalculatorPage}>Login</Button>
    </Form>
  )
}
const Form = styled.form`
width: 500px;
margin: 5rem auto;
padding: 40px 20px;
background-color: #fff;
display: flex;
flex-direction: column;
align-items: center;
border-radius: 10px;
`
const Input = styled.input`
 width: 80%;
 border-radius: 20px;
 outline: none;
 border: 1px solid gray;
 margin: 15px;
 padding: 10px 15px;
`
const Button = styled.button`
padding: 13px 60px;
border-radius: 30px;
border: none;
margin: 5px;
font-weight: 550;
font-size: 22px;
background-color: #190faa;
color: #fff;
`