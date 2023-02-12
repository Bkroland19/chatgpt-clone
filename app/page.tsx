import { BoltIcon, ExclamationTriangleIcon, SunIcon } from "@heroicons/react/24/outline"

 
 const HomePage = () =>{
    return(
        <>
          <div>
            <div className="flex flex-col items-center justify-center text-white h-screen">
            <h1 className="font-bold text-5xl mb-20"><span className="text-red-500">Bre</span>NDA</h1>
            <div className='md:flex space-x-4 text-center'>
            <div>
                    <div className="flex flex-col mb-5 items-center justify-center">
                        {/* icons */}
                        <SunIcon className="h-6 w-6" />
                        <h2>Examples</h2>
                    </div>
                    <div className="space-y-2 ">
                        <p className="infoText">"Explain something to me" </p>
                        <p className="infoText">"Whats the difference between graduation and valentine</p>
                        <p className="infoText">"Whats valentine according to you</p>
                    </div>
                </div>
            

            
                <div>
                    <div className="flex flex-col mb-5 items-center justify-center">
                        {/* icons */}
                        <BoltIcon className="h-6 w-6" />
                        <h2>Capabilities</h2>
                    </div>
                    <div className="space-y-2 ">
                        <p className="infoText">Remembers what user said earlier in the conversation </p>
                        <p className="infoText">Allows user to provide follow-up corrections</p>
                        <p className="infoText">Trained to decline inappropriate requests</p>
                    </div>
                </div>
            


           
                <div>
                    <div className="flex flex-col mb-5 items-center justify-center">
                        {/* icons */}
                        <ExclamationTriangleIcon className="h-6 w-6" />
                        <h2>Limitations</h2>
                    </div>
                    <div className="space-y-2 ">
                        <p className="infoText">May occasionally generate incorrect information</p>
                        <p className="infoText">May occasionally produce harmful instructions or biased content</p>
                        <p className="infoText">Limited knowledge of world and events after 2021</p>
                    </div>
                
            </div>
            </div>
        </div>
        </div>

        
        </>
        
        
        
    )
 }

 export default HomePage