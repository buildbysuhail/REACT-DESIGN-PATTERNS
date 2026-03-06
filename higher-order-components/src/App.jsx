// import { useState } from 'react'
import './App.css'
import { printProps } from './printProps'
import { UserInfo } from './UserInfo'

const UserInfoWrapped = printProps(UserInfo);

function App() {
  // const [count, setCount] = useState(0)

  return (
    <UserInfoWrapped user={{ name: "Suhail", age: 25, hairColor: "black", hobbies: [] }}/>
  )
}

export default App
