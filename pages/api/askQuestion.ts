// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import query from '../../utils/queryApi';
import admin from "firebase-admin";
import { adminDb } from '../../firebaseAdmin';

type Data = {
  answer: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const {model , chatId , prompt , session} = req.body

    if(!prompt){
        return res.status(400).json({answer:"please provide a prompt"})
    }
    if(!chatId){
        return res.status(400).json({answer:"please provide a chatId"})
    }


    //chatgpt query

    const response = await query({prompt,model,chatId})


    const message:Message = {
        text:response || "Brenda was unable to find an answer for you",
        createdAt: admin.firestore.Timestamp.now(),
        user: {
            _id: 'ChatGPT',
            name: 'ChatGPT', 
            avatar: "https://links.papareact.com/89k",
        },
    };

    await adminDb
    .collection("users")
    .doc(session?.user.email!)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);
     
  res.status(200).json({ answer: message.text })
}
