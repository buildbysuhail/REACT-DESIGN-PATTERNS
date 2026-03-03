import React,{useEffect, useState} from 'react'

function ControlledForm({intialName, initialAge, initialHairColor}) {

  const [name, setName] = useState(intialName || '');
  const [age, setAge] = useState(initialAge);
  const [hairColor, setHairColor] = useState(initialHairColor || '');

  const [nameError, setNameError] = useState('')

  const handleSubmit = e => {
    console.log(name)
    console.log(age)
    console.log(hairColor)
    e.preventDefault();
  }

  useEffect(()=>{
    if(name.length <=2) {
        setNameError("Name must be more than 2 characters")
    } else {
        setNameError('')
    }
  },[name])

  return (          
       <form action="" onSubmit={handleSubmit} >
        <h4>ControlledForm</h4>
        {nameError && <p style={{color:"red"}}>{nameError}</p>}
        <input name="name" type="text" placeholder="Name" onChange={e=> setName(e.target.value)} />
        <input name="age" type="number" placeholder="Age" onChange={e=> Number(setAge(e.target.value))} />
        <input name="hairColor" type="text" placeholder="Hair Color" onChange={e=> setHairColor(e.target.value)}  />
        <input type="Submit" value="Submit" />
       </form>
  )
}

export default ControlledForm