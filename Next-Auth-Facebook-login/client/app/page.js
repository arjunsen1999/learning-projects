"use client"
import Image from 'next/image'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function Home() {
  const session = useSession();
  console.log("status : ", session)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     
    <button onClick={() => {signIn()}} className='bg-blue-900 px-3 py-2 text-white'>Login Via Facebook</button>
    <button  onClick={() => {signOut()}} className='bg-blue-900 px-3 py-2 text-white'>Logout Via Facebook</button>

    </main>
  )
}
