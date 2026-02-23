// import { useState } from 'react'
// import './App.css'
import { SplitScreen } from './SplitScreen';
import { RegularList } from './RegularList';
import { SmallPersonListItem } from './SmallPersonListItem';
// import { LargePersonListItem } from './LargePersonListItem';
// import { NumberedList } from './NumberedList';
import { Modal } from './Modal';

function App() {
  
// const leftHandComponent = () => {
//   return <h1 style={{ backgroundColor: 'red' }}>Left!</h1>
// };

// const rightHandComponent =() => {
//   return <p style={{ backgroundColor: 'green' }}>Right!</p>
// }

const people = [{
  name: 'Stark',
  age: 40,
  hairColor: 'black',
  hobbies: ['acting', 'singing',]
}, {
  name: 'Smith',
  age: 50,
  hairColor: 'brown',
  hobbies: ['studying', 'walking',]
}, {
  name: 'Johnson',
  age: 60,
  hairColor: 'blonde',
  hobbies: ['learning', 'coding',]
}]

  return (
    // <SplitScreen left={leftHandComponent} right={rightHandComponent} />
    <>
    {/* <RegularList items={people} resourceName='person' itemComponent={SmallPersonListItem} />
    <RegularList items={people} resourceName='person' itemComponent={LargePersonListItem} />
    <RegularList items={people} resourceName='person' itemComponent={NumberedList} /> */}
    <Modal>
      <SplitScreen>
        <h1>The Left Side</h1>
        <RegularList 
          items={people} 
          resourceName="person"
          itemComponent={SmallPersonListItem}
        />
      </SplitScreen>
    </Modal>
    </>
  )
}

export default App
