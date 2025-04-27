import React from 'react'

const Hero = () => {
  return (
    <div>
       <div className="flex items-center justify-center min-h-screen bg-[#1f1f2e] px-4">
      <div className="border-2 border-dashed border-orange-400 rounded-lg p-8 w-full max-w-md text-center">
        <h2 className="text-white text-2xl font-bold mb-4">Add New Task</h2>
        
        <input
          type="text"
          placeholder="Enter your task..."
          className="w-full p-3 rounded-md bg-[#3b3b55] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 mb-4"
        />
        
        <button className="w-full bg-orange-400 hover:bg-orange-500 text-[#1f1f2e] font-bold py-3 rounded-md transition duration-300">
          Add Task
        </button>
      </div>
    </div>
    </div>
  )
}

export default Hero
