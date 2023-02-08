'use client'
import { signIn } from "next-auth/react"
import Image from "next/image"

function Login() {
  return (
    <div className="bg-[#11A37F] h-screen flex flex-col items-center justify-center">
        <Image 
        src="https://links.papareact.com/2i6"
        width={300}
        height={300}
        alt="logo"
         />

         <button onClick={()=>signIn('google')} className="font-bold   bg-white rounded-lg border shadow-2xl hover:bg-gray-700/50 hover:text-white p-4 transition-all duration-200 ease-in-out">Sign In to use  <span className="text-xl text-red-500">Bre</span>NDA</button>
    </div>
  )
}

export default Login