import React from 'react'

function UpgradeCard( { handleOnClick} : any) {
  return (
    <div className="relative bg-gray-900 block p-6 border border-gray-100 rounded-lg max-w-sm mx-auto shadow-2xl mt-24">
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600" />
        <div className="my-4">
            <h2 className="text-white text-2xl font-bold pb-2">Upgrade Credit</h2>
            <p className="text-gray-300 py-1">$10 One-Time Purchase</p>
            <p className="text-gray-300 py-1">10,000 Bonus Credit</p>
        <div className="flex flex-col text-gray-100 p-6">
        <div className="flex-1 inline-flex items-center mb-3">
            <div className="bg-green-300 mr-3 p-1 rounded-full">
            <svg className="h-3 w-3 text-green-800 fill-current" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <polygon points="0 11 2 9 7 14 18 3 20 5 7 18" />
            </svg>
            </div>
            <p className="text-xs">100,000 words/purchase</p>
        </div>
        <div className="flex-1 inline-flex items-center mb-3">
            <div className="bg-green-300 mr-3 p-1 rounded-full">
            <svg className="h-3 w-3 text-green-800 fill-current" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <polygon points="0 11 2 9 7 14 18 3 20 5 7 18" />
            </svg>
            </div>
            <p className="text-xs">Access All Templates</p>
        </div>
        <div className="flex-1 inline-flex items-center mb-3">
            <div className="bg-green-300 mr-3 p-1 rounded-full">
            <svg className="h-3 w-3 text-green-800 fill-current" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <polygon points="0 11 2 9 7 14 18 3 20 5 7 18" />
            </svg>
            </div>
            <p className="text-xs">Retain Recent Contents</p>
        </div>
        </div>
        </div>
        <div className="flex justify-end">
            <button onClick={handleOnClick} className="px-2 py-1 text-white border border-gray-200 font-semibold rounded hover:bg-gray-800">Upgrade</button>
        </div>
</div>

  )
}

export default UpgradeCard