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

const Part = (props) => {
  return(
    <>
    <h2>
      {props.partName} 
    </h2>
    <p>
      Cantidad de ejercicios: {props.exercices}
    </p>
    </>
  )

}

const Content = (props) => {
  return (
    <>
    <Part partName={`Titulo de la parte 1: ${props.part1}`} exercices={`Cantidad de ejercicios: ${props.exercises1}`}/>
    <Part partName={`Titulo de la parte 1: ${props.part2}`} exercices={`Cantidad de ejercicios: ${props.exercises2}`}/>
    <Part partName={`Titulo de la parte 1: ${props.part3}`} exercices={`Cantidad de ejercicios: ${props.exercises3}`}/>
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
  const course = 'Half Stack aplication development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }

  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <>
      <div>
        <Header course={course}/>
        <Content part1={part1.name} exercises1={part1.exercises} part2={part2.name} exercises2={part2.exercises} part3={part3.name} exercises3={part3.exercises} />
        <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises}/>       
      </div>
    </>
  )
}

export default App
