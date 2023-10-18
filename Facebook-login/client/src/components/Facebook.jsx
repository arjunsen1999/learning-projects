import React, { useState } from 'react'
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { auth, provider } from './firebase';

export default function Facebook() {
    const [user, setUser] = useState(null);
    const handleLogin = () =>{
        signInWithPopup(auth, provider).then((res) =>{
            setUser(res)
        }).catch((err) =>{
            console.log("error", err)
        })
    }
    console.log("user", user)
  return (
    <div>
      <button onClick={handleLogin}>Facebook Login</button>
    </div>
  )
}
