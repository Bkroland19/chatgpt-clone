import type { NextApiRequest, NextApiResponse } from 'next';
import openai from '../../utils/chatgpt';

type Option ={
    value:string;
    label:string;
}

type Data = {
    modelOptions: Option[];
}


export default async function handler( 
    req: NextApiRequest,
    res: NextApiResponse<Data>
    ){
        const models = await openai.listModels().then(res => res.data.data);

        console.log(res)

        const modelOptions = models.map((model) => ({
            value:model.id,
            label:model.id
        }))


        res.status(200).json({
            modelOptions
        })
    }