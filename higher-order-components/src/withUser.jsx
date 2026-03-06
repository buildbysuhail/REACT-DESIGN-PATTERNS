import React, { useState, useEffect } from "react";

export const withUser = (Component, userId) => {
    return props => {
        const [user, setUser] = useState(null);

        useEffect(()=>{
        setUser({userId: userId, name: "Suhail", age:25 ,hairColor: "Black", hobbies: ["code", "food"] })
        },[])

    // if (!user) return <p>Loading...<p/>
    

    return <Component {...props} user={user}/>
    }
}