import { useState } from 'react'
// import './App.css'
// import { CurrentUserInfo } from './CurrentUserInfo';
// import { CurrentUserLoader } from './CurrentUserLoader';

import { UserInfo } from './UserInfo';
import { UserLoader } from './UserLoader';
import { ResourceLoader } from './ResourceLoader';

function App() {
  // const [count, setCount] = useState(0)

  // return </CurrentUserInfo>
  return (
     
    // <CurrentUserInfo />
    // <CurrentUserLoader>
    //   <UserInfo />
    // </CurrentUserLoader>
    <>
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
