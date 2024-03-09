import React from 'react'

const Linktree = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 to-purple-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-center">
        <img 
        className="h-36 w-36 rounded-full mb-4 border-4 border-white shadow-lg"
        src="../src/assets/bharti.svg"
        alt="Bharti Kumari"
         />  

         <h1 className="text-3xl font-bold text-white mb-3">Bharti Kumari</h1>  

         <p className="text-1xl font-normal text-white mb-3 text-center">Amazon ML Summer'23 | SIH'23 Finalist | Samsung SFT - Top 50 | Technical Writer | Mentor @GSSoC | MongoDB Community Creator</p>
        </div>
      </div>
    </div>
  )
}

export default Linktree
