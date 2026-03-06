// import { useState } from 'react'
import './App.css'
import { printProps } from './printProps'
import { UserInfo } from './UserInfo'
import { withUser } from './withUser'

// const UserInfoWrapped = printProps(UserInfo);
// const UserInfoWrapped = withUser(UserInfo);
const UserInfoWrapped = withUser(printProps(UserInfo), '337');

function App() {
  // const [count, setCount] = useState(0)

  return (
    // <UserInfoWrapped user={{ name: "Suhail", age: 25, hairColor: "black", hobbies: [] }}/>
    <UserInfoWrapped />
  )
}

export default App
