import React from 'react'
import { StaticImageData } from 'next/image'
import Image  from 'next/image'


type TemplateCardProps = {
    name : string,
    icon : StaticImageData
    desc : string
}

function TemplateCard({ name, icon, desc } : TemplateCardProps) {
  return (
    <div
    className="relative p-3 bg-white rounded-3xl flex overflow-hidden items-center min-w-[300px] cursor-pointer group"
  >
    <Image
      className="z-50 h-5 w-5 absolute top-3 right-3 rounded-full outline outline-gray-100/15 transition duration-1000 group-hover:scale-[2] group-hover:rotate-[410deg] group-hover:-translate-y-3 group-hover:translate-x-3"
      height="20"
      width="20"
      src={icon}
      alt='iconImage'
    />
    <div className="absolute inset-0 ring-1 ring-white/30 ring-inset bg-gradient-to-l from-black/80 via-black/50 to-black/20 rounded-2xl overflow-hidden"></div>
    <div className="relative z-10 flex items-center space-x-4">
    <Image
        className="h-16 w-16 rounded-2xl object-contain shadow-md border border-gray-100/20 transition duration-300 group-hover:scale-95"
        height="64"
        width="64"
        src={icon}
        alt='iconImage'
      />
      <div className="flex flex-col transition duration-300 group-hover:-translate-x-2">
        <div
          className="relative text-md font-semibold text-gray-100 cursor-pointer after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gradient-to-r after:from-gray-100/30 after:via-gray-100/10 after:to-transparent after:origin-left after:h-[2px] after:w-0 group-hover:after:w-full after:bottom-0 after:left-0"
        >
          {name}
        </div>
        <p className="text-xs text-gray-50/70 text-balance">{desc}</p>
      </div>
    </div>
  </div>
  )
}

export default TemplateCard