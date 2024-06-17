import { useContext, useState } from "react"
import { UserContext } from "./UserContextProvider"

export interface Person {
    name: string
    age: number
    isMarried: boolean
}
export enum Countries{
    Brazil = "Brazil",
    France = "France",
    USA = "USA"
}
export const User = (props: Person) => {
    //const [ ] = useContext(UserContext)
    const [bio, setBio] = useState<string>()
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBio(event.target.value)
    }
    return(
    <div>
        <p>Name: {props.name} </p>
        <p>Age: {props.age} </p>
        <p>isMarried: {props.isMarried ? "is married" : "is single"} </p>
        <p>Bio: {bio} </p>
        <input onChange={handleChange} />
    </div>
    )


}