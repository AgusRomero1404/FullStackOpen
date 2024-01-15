import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Greetings {props.name}, you are {props.age} years old</p>
    </div>
  )
}
const App = () => {
 
  const name = 'Peter' 
  const age = 20

  return (
    <>
      <p>Hello World!</p>
      <Hello name="Agustin" age = {age}></Hello>
      <Hello name={name} age = {age}></Hello>
    </>
  )
}
export default App
