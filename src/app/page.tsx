    import React from 'react'
    
    const page = () => {
      return (
        <div>
          <nav className=' w-full bg-black h-28 items-center flex' >
          
            <div className='bg-gray-500 h-10 w-96'></div>

            <div className="flex justify-end w-3/5 item-centre">
            <div className="bg-yellow-500 h-10 w-40"></div>
            <div className="bg-green-500 h-10 w-40"></div>
            <div className="bg-orange-500 h-10 w-40"></div>
            <div className="bg-purple-500 h-10 w-40"></div>
            </div>

          </nav>
          <br />
          <div className="flex items-center h-full" >
            <div className="bg-purple-900 w-1/2 h-80"></div>
          <div className="bg-yellow-900 w-1/2 h-80"></div>
          </div>
          <br />
          <div className="flex items-stretch h-full">
            <div className="bg-green-300 w-1/3 h-44"></div>
            <div className="bg-red-300 w-1/3 h-44"></div>
            <div className="bg-slate-700 w-1/3 h-44"></div>
            
          </div>
          </div>
        
      )
    }
    
    export default page
    