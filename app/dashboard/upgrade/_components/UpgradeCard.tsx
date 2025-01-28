import React from 'react'

function UpgradeCard( { handleOnClick} : any) {
  return (
    <div className="relative mx-auto mt-24 block max-w-sm rounded-lg border border-gray-100 bg-gray-900 p-6 shadow-2xl">
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600" />
        <div className="my-4">
            <h2 className="pb-2 text-2xl font-bold text-white">Upgrade Credit</h2>
            <p className="py-1 text-gray-300">$10 One-Time Purchase</p>
            <p className="py-1 text-gray-300">10,000 Bonus Credit</p>
        <div className="flex flex-col p-6 text-gray-100">
        <div className="mb-3 inline-flex flex-1 items-center">
            <div className="mr-3 rounded-full bg-green-300 p-1">
            <svg className="size-3 fill-current text-green-800" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <polygon points="0 11 2 9 7 14 18 3 20 5 7 18" />
            </svg>
            </div>
            <p className="text-xs">100,000 words/purchase</p>
        </div>
        <div className="mb-3 inline-flex flex-1 items-center">
            <div className="mr-3 rounded-full bg-green-300 p-1">
            <svg className="size-3 fill-current text-green-800" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <polygon points="0 11 2 9 7 14 18 3 20 5 7 18" />
            </svg>
            </div>
            <p className="text-xs">Access All Templates</p>
        </div>
        <div className="mb-3 inline-flex flex-1 items-center">
            <div className="mr-3 rounded-full bg-green-300 p-1">
            <svg className="size-3 fill-current text-green-800" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <polygon points="0 11 2 9 7 14 18 3 20 5 7 18" />
            </svg>
            </div>
            <p className="text-xs">Retain Recent Contents</p>
        </div>
        </div>
        </div>
        <div className="flex justify-end">
            <button onClick={handleOnClick} className="rounded border border-gray-200 px-2 py-1 font-semibold text-white hover:bg-gray-800">Upgrade</button>
        </div>
</div>

  )
}

export default UpgradeCard