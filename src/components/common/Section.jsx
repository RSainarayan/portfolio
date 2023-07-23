import React from 'react'

const Section = ({title, subtitle, children}) => {
  return (
    <section className='min-h-fit flex flex-col justify-start items-center py-16 px-5 text-center'>
        <h3 className='py-10 px-10 text-5xl lg:text-10xl'>{title}

        </h3>
        <p className='max-w-xl font-light text-gray-500 mb-10 text-5sm md:text-base'>
            {subtitle}

        </p>
        {children}
    </section>
  )
}

export default Section
