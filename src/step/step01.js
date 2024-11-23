import React, { useState } from 'react'

const Step01 = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <button className={`px-4 py-2 border 
      ${isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} 
      `}>{isActive ? '활성화' : '비활성화'}</button>
    </>
  )
}

export default Step01