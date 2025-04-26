import React from 'react'

const SectionWrapper = ({id,children}) => {
  return (
    <div id={id} className='scroll-mt-20'>
      {children}
    </div>
  )
}

export default SectionWrapper
