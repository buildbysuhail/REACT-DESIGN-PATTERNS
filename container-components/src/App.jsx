import { useState } from 'react'
// import './App.css'
// import { CurrentUserInfo } from './CurrentUserInfo';
// import { CurrentUserLoader } from './CurrentUserLoader';

import { UserInfo } from './UserInfo';
import { UserLoader } from './UserLoader';
import { ResourceLoader } from './ResourceLoader';
import { DataLoader } from './DataLoader';
import axios from 'axios';

function App() {
  // const [count, setCount] = useState(0)

  // return </CurrentUserInfo>

  const getServerData = url => async () => {
    const response = await axios.get(url);
    return response.data;
  }

  const getTestData =()=>{
    return {
      id: '345',
      name: 'Jane Garcia',
      age: 27,
      hairColor: 'blonde',
      hobbies: ['biology', 'medicine', 'gymnastics'],
    }
  }

  return (
     
    // <CurrentUserInfo />
    // <CurrentUserLoader>
    //   <UserInfo />
    // </CurrentUserLoader>
    <>
    <DataLoader
      getDataFn={getTestData}
      resourceName="user"
    >
      <UserInfo />
    </DataLoader>
    <ResourceLoader
      resourceUrl="/api/users/123"
      resourceName="user"
    >
      <UserInfo />
    </ResourceLoader>
    
    <UserLoader userId="123">
      <UserInfo />
    </UserLoader>
    <UserLoader userId="234">
      <UserInfo />
    </UserLoader>
    <UserLoader userId="345">
      <UserInfo />
    </UserLoader>
   </>
  )
  
}

export default App
