import React from 'react'

export default function nav() {
  return (
    <div>
      <ul className="flex flex-row gap-x-16 p-5 text-xl  align-center items-center font-medium">
        <h4 className="not-italic font-bold text-4xl text-green-site font-Inter">Bechera</h4>
        <li>About</li>
        <li>Blog</li>
        <li>Gallery</li>
      </ul>
    </div>
  )
}
