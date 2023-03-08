import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BsFillSunFill } from "react-icons/bs";
import { HiOutlineMoon } from "react-icons/hi";

export const Header = ({logOut, searchParams}) => {
  const [color , setColor]=useState("#a4b3cc")
const [color2 , setColor2] = useState ("#233f4e")

    const click = color => {
     setColor(color)
    
    }
const click2 = color2 =>{
    setColor2(color2)
}
  
    useEffect(()=>{
      document.body.style.background = color
    }, [color])
    
    useEffect(()=>{
      document.body.style.background = color2
    }, [color2])
  
  return (
    <HeaderContainer>
     <p>Calculator</p>
     <Logout>
       {
      searchParams.has('calculator') && <Button onClick={logOut}>Logout</Button>
     }
     <div>
    
      <Icons onClick={()=> click(document.body.style.background = color)}><BsFillSunFill /></Icons>
      <Icons onClick={()=> click2(document.body.style.background = color2)}><HiOutlineMoon /></Icons>
     </div>
     </Logout>
    
     
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
 background-color: #3982cc;
 display: flex;
 justify-content: space-around;
 align-items: center;
 padding: 10px;
  
  p{
   color: #fff;
   font-size: 25px;
   font-weight: bold;

  }
`
const Button = styled.button`
padding: 10px 50px;
border-radius: 30px;
border: none;
margin: 5px;
font-weight: 550;
font-size: 20px;
background-color: #260faa;
color: #fff;
margin-right: 60px;
`
const Icons = styled.button`
  margin: 5px;
  padding:  10px;
  background-color: rgb(130, 171, 238);
  border: none;
  border-radius: 20px;

  :hover{
    background-color: #5896ee;
  }
`
const Logout = styled.div`
 display: flex;
 align-items: center;
`
