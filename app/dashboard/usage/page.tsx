import React from 'react'
import { AIUsage } from '../_components/ai-usage'


function UsagePage() {
  return (
    <div className="mx-5 py-2">
    <div className="mt-5 rounded bg-white px-4 py-6">
      <h1 className="flex items-center justify-center bg-gradient-to-r from-indigo-500 to-teal-500 bg-clip-text text-2xl font-black text-transparent">
       Credit Usage
        </h1>
    </div>
    <AIUsage/>
  </div>
  )
}

export default UsagePage