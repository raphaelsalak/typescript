import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { User } from './Person'
import { UserProvider } from './UserContextProvider'

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
 const [data, setdata] = useState<boolean | null>(null)
 

  return (
      <UserProvider>
        <User name={"Bob"} age={22} isMarried={false} />{" "}
      </UserProvider>
  )
}

export default App
