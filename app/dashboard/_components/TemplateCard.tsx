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
    className="group relative flex min-w-[300px] cursor-pointer items-center overflow-hidden rounded-3xl bg-white p-3"
  >
    <Image
      className="absolute right-3 top-3 z-50 size-5 rounded-full outline outline-gray-100/15 transition duration-1000 group-hover:-translate-y-3 group-hover:translate-x-3 group-hover:rotate-[410deg] group-hover:scale-[2]"
      height="20"
      width="20"
      src={icon}
      alt='iconImage'
    />
    <div className="absolute inset-0 overflow-hidden rounded-2xl bg-gradient-to-l from-black/80 via-black/50 to-black/20 ring-1 ring-inset ring-white/30"></div>
    <div className="relative z-10 flex items-center space-x-4">
    <Image
        className="size-16 rounded-2xl border border-gray-100/20 object-contain shadow-md transition duration-300 group-hover:scale-95"
        height="64"
        width="64"
        src={icon}
        alt='iconImage'
      />
      <div className="flex flex-col transition duration-300 group-hover:-translate-x-2">
        <div
          className="text-md relative cursor-pointer font-semibold text-gray-100 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:origin-left after:bg-gradient-to-r after:from-gray-100/30 after:via-gray-100/10 after:to-transparent after:transition-[width] after:duration-700 after:ease-in-out group-hover:after:w-full"
        >
          {name}
        </div>
        <p className="text-balance text-xs text-gray-50/70">{desc}</p>
      </div>
    </div>
  </div>
  )
}

export default TemplateCard