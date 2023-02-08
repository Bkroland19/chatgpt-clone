'use client'
import { PaperAirplaneIcon } from "@heroicons/react/24/solid"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { useSession } from "next-auth/react"
import { FormEvent, useState } from "react"
import { toast } from "react-hot-toast"
import  useSWR  from "swr"
import { db } from "../firebase"
import ModelSelection from "./ModelSelection"

type Props ={
    chatId:string
}


function ChatInput({chatId}:Props) {
    const [prompt , setPrompt] = useState("")
    const {data:session} = useSession()

    const {data:model } = useSWR('model' ,{
      fallbackData:'text-davinci-003'
  })

    // const model = "text-davinci-003"


    const sendMessage =  async (e:FormEvent<HTMLFormElement>) => {
         e.preventDefault()

         if(!prompt) return;

         const input = prompt.trim()
         const message : Message = {
          text:input,
          createdAt:serverTimestamp(),
          user:{
            _id:session?.user?.email!,
            name:session?.user?.name!,
            avatar:session?.user?.image || `https://ui-avatars.com/api/?name=${session?.user?.name}`,

          }
         }
         setPrompt("")


         await addDoc(
          collection(db, 'users' , session?.user?.email! , 'chats' , chatId ,'messages'),
           message
          )

          //toast notification

          const notification = toast.loading('Brenda love is thinking....')

          await fetch('/api/askQuestion' ,{
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify({
                  prompt:input ,
                  chatId,
                  session,
                  model, 
            })
          }).then(() => {

            toast.success('Brenda has responded!' ,{
              id:notification
            })

          })
    }


  return (
    <div className=" bg-gray-700/50 rounded-lg text-xs ">
        <form onSubmit={ sendMessage} className="flex p-5  space-x-5 ">
            <input 
             type="text"
             className="focus:outline-none text-white flex-1 bg-transparent disabled:cursor-not-allowed disabled:text-gray-300 "
             disabled={!session}
             value={prompt}
             onChange = {e => setPrompt(e.target.value)}
             placeholder="Enter your text here... "
            />

            <button disabled={!prompt || !session} className ="bg-[#11A37F] disabled:bg-gray-300 disabled:cursor-not-allowed hover:opacity-50 text-white font-bold px-4 py-2 rounded" type="submit" ><PaperAirplaneIcon className="h-4 w-4 -rotate-45 text-white"/></button>
        </form>

        <div className="md:hidden">
          <ModelSelection/>
        </div>
    </div>
  )
}

export default ChatInput