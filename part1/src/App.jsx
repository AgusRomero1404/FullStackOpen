import { useState } from 'react'

const Header = (props) => {
  return (
    <>
    <h1>
      {props.course}
    </h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
    <h2>
      Titulo de parte 1: {props.part1}
    </h2>
    <p>
      Cantidad de ejercicios de la parte 1: {props.exercises1}
    </p>
    <h2>
      Titulo de parte 2: {props.part2}
    </h2>
    <p>
      Cantidad de ejercicios de la parte 2: {props.exercises2}
    </p>
    <h2>
      Titulo de parte 3: {props.part3}
    </h2>
    <p>
      Cantidad de ejercicios de la parte 2: {props.exercises2}
    </p>
    </>
  )
}

const Total = (props) => {
  const { exercises1, exercises2, exercises3 } = props;
  const totalEx = exercises1 + exercises2 + exercises3;
  return (
   
    <>
    <p>
     Total de ejercicios: {totalEx}
    </p>
    </>
  )
}


function App() {
  const course = 'Half Stack applicatiiioiin development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'Stage of a component'
  const exercises3 = 14

  return (
    <>
      <div>
        <Header course={course}/>
        <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
        <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>       
      </div>
    </>
  )
}

export default App
