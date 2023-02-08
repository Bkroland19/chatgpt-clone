import openai from "./chatgpt";


type Props = {
    prompt:string;
    model:string;
    chatId:string;
}

const query = async ({prompt ,model , chatId}:Props) => {
    const res = await openai
    .createCompletion({
        model,
        temperature:0.9,
        top_p:1,
        max_tokens:2048,
        frequency_penalty:0,
        presence_penalty:0,
        prompt,
    }).then((res) => res.data.choices[0].text)
    .catch(err => `Brenda was unable to find an answer for that! (Error: ${err.message})`)



    return res

}

export default query