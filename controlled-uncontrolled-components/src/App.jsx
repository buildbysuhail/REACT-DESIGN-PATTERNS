import { useState } from 'react'
import UncontrolledForm from './UncontrolledForm'
import ControlledForm from './ControlledForm'
import { ControlledModal } from './ControlledModal'
import { UncontrolledOnboardingFlow } from './UncontrolledOnboardingFlow'
import { ControlledOnboardingFlow } from './ControlledOnboardingFlow'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

const StepOne = ({ goToNext }) => (
	<>
	<h1>Step 1</h1>
	<button onClick={() => goToNext({ name: 'John Doe' })}>Next</button>
	</>
);

const StepTwo = ({ goToNext }) => (
	<>
	<h1>Step 2</h1>
	<button onClick={() => goToNext({ age: 40 })}>Next</button>
	</>
);

const StepThree = ({ goToNext }) => (
	<>
	<h1>Congratulations! You qualify for the senior discount!</h1>
	<button onClick={() => goToNext({ hairColor: 'brown' })}>Next</button>
	</>
);

const StepFour = ({ goToNext }) => (
	<>
	<h1>Step 4</h1>
	<button onClick={() => goToNext({ hairColor: 'brown' })}>Next</button>
	</>
);

function App() {
  // const [count, setCount] = useState(0)
  const [showModal, setShowModal] = useState(false)

  

const [onboardingData, setOnboardingData] = useState({});
	const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = stepData => {
    setOnboardingData({ ...onboardingData, ...stepData });
    setCurrentIndex(currentIndex + 1);
  }

  return (
    <>
      {/* <UncontrolledForm/>
      <ControlledModal onRequestClose={()=>setShowModal(false)} shouldShow={showModal}>
        <ControlledForm 
          intialName={"Suhail T"}
          initialAge={35}
          hairColor={"Black"}
        />
      </ControlledModal>
      <button onClick={()=>setShowModal(true)}>Open Modal</button> */}

      {/* <UncontrolledOnboardingFlow onFinish={data => {
        console.log(data);
        alert('Onboarding complete!');
      }} 
      >
        <StepOne/>
        <StepTwo/>
        <StepThree/>
      </UncontrolledOnboardingFlow> */}

      <ControlledOnboardingFlow
      currentIndex={currentIndex}
      onNext={onNext}
      onFinish={() => alert('Done!')}
    >
			<StepOne />
			<StepTwo />
			{onboardingData.age >= 65 && <StepThree />}
      <StepFour />
		</ControlledOnboardingFlow>
    </>
  )
}

export default App
