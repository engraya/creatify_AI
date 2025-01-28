import React from 'react'
import { AIUsage } from '../_components/ai-usage'


function UsagePage() {
  return (
    <div className="mx-5 py-2">
    <div className="mt-5 py-6 px-4 bg-white rounded">
      <h1 className="bg-clip-text flex justify-center items-center text-transparent bg-gradient-to-r from-indigo-500 to-teal-500 text-2xl font-black">
       Credit Usage
        </h1>
    </div>
    <AIUsage/>
  </div>
  )
}

export default UsagePage