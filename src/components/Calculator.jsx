import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { calculatorAction } from '../store/CalculatorSlice'


export const Calculator = () => {
 const count = useSelector((state) => state.calculator)
console.log("aa", count);
const [inputValue, setInputValue] = useState(0)
const dispatch = useDispatch()

const getInputValue = (e) => {
 setInputValue(e.target.value)
 // setInputValue("")
}

const addHandler = () => {
 dispatch(calculatorAction.addCount(inputValue))
 setInputValue("")
}
const subtructHandler = () => {
 dispatch(calculatorAction.subtructCount(inputValue))
 setInputValue("")
}
const multiplyHandler = () => {
 dispatch(calculatorAction.multiplyCount(inputValue))
 setInputValue("")
}
const divideHandler = () => {
 dispatch(calculatorAction.divideCount(inputValue))
 setInputValue("")
}
console.log(inputValue);
  return (
    <ContainerCalc>
     <Input
       type="number" 
       value={inputValue}
       onChange={getInputValue}
       />

     <p>COUNT: {count.count}</p>
     <Button onClick={addHandler}>+</Button>
     <Button onClick={subtructHandler}>-</Button>
     <Button onClick={multiplyHandler}>*</Button>
     <Button onClick={divideHandler}> /</Button>
     {/* <ButtonResult>=</ButtonResult> */}
     <ButtonClear onClick={() => dispatch(calculatorAction.resetCount())}>C</ButtonClear>
    </ContainerCalc>
  )
}
const ContainerCalc = styled.div`
 background-color: #6073b9;
 width: 500px;
 margin: 4rem auto;
 padding: 40px 20px;
 border-radius: 20px;

 p{
  color: #fff;
  font-weight: 550;
  font-size: 25px;
 }
`
const Input = styled.input`
 padding: 20px 35px;
 text-align: center;
 width: 60px;
 border-radius: 10px;
 outline: none;
 border: none;
 font-size: 24px;
`
const Button = styled.button`
padding: 10px 20px;
border-radius: 10px;
border: none;
margin: 5px;
font-weight: 550;
font-size: 25px;
`
const ButtonClear = styled.button`
padding: 10px 20px;
border-radius: 10px;
border: none;
margin: 5px;
font-weight: 550;
font-size: 25px;
background-color: #ee2929;
color: #fff;
`
const ButtonResult = styled.button`
padding: 10px 20px;
border-radius: 10px;
border: none;
margin: 5px;
font-weight: 550;
font-size: 25px;
background-color: #15a3db;
color: #fff;
`