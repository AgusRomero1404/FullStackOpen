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


const App = () => {
  const course = {
    name:'Half Stack application development',
    parts: [
      {
        name:'Fundamentals of React',
        exercises: 10
      },
      {
        name:'Using props to pass data',
        exercises: 7
      },
      {
        name:'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <div>
        <Header course={course.name}/>
        <Content part1={course.parts[0].name} exercises1={course.parts[0].exercises} part2={course.parts[1].name} exercises2={course.parts[1].exercises} part3={course.parts[2].name} exercises3={course.parts[2].exercises} />
        <Total exercises1={course.parts[0].exercises} exercises2={course.parts[1].exercises} exercises3={course.parts[2].exercises}/>       
      </div>
    </>
  )
}

export default App
