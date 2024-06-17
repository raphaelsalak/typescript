import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Person } from './Person'

function App() {
  const [count, setCount] = useState(0)
 // let name = "bob"
 // let age: number = 21
 // let isBoolean: boolean = true
 // let ages: number[] = [1, 2, 3, 4, 5]
 // let something: any = 3
 
 //defining types
 
 //Making types

 //Using it in a function

 //Generics like using in a usehook()
 

  return (
    <>
      <Person name={"Bob"} age={22} isMarried={false} />{" "}
    </>
  )
}

export default App
