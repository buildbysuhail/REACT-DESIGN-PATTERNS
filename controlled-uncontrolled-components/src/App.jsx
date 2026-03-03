import { useState } from 'react'
import UncontrolledForm from './UncontrolledForm'
import ControlledForm from './ControlledForm'
import { ControlledModal } from './ControlledModal'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <UncontrolledForm/>
      <ControlledModal onRequestClose={()=>setShowModal(false)} shouldShow={showModal}>
        <ControlledForm 
          intialName={"Suhail T"}
          initialAge={35}
          hairColor={"Black"}
        />
      </ControlledModal>
      <button onClick={()=>setShowModal(true)}>Open Modal</button>
    </>
  )
}

export default App
