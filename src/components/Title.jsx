import React from 'react'

const Title = ({subTitle , Title}) => {
  return (
    <div className='text-center text-[#212EA0] text-base mt-16 mb-7 font-semibold'>
        <p>{subTitle}</p>
        <h2 className='text-3xl text-[#000F38] mt-1'>{Title}</h2>
    </div>
  )
}

export default Title