import React from 'react'

function UncontrolledForm() {

  const nameInput = React.createRef();
  const ageInput = React.createRef();
  const hairColorInput = React.createRef();

  const handleSubmit = e => {
    console.log(nameInput.current.value)
    console.log(ageInput.current.value)
    console.log(hairColorInput.current.value)
    e.preventDefault();
  }

  return (
    <div>
       <h4>UncontrolledForm</h4>
       <form action="" onSubmit={handleSubmit} >
        <input name="name" type="text" placeholder="Name" ref={nameInput} />
        <input name="age" type="number" placeholder="Age" ref={ageInput} />
        <input name="hairColor" type="text" placeholder="Hair Color" ref={hairColorInput} />
        <input type="Submit" value="Submit" />
       </form>
    </div>
  )
}

export default UncontrolledForm