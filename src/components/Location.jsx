import React from 'react'
import Section from './common/Section'

const map = () => {
  return <Section>
    <div>
      <h1 className = 'mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>Hey here is my Location <span>📍</span></h1>
    </div>
     <div className = ' mt-10 flex justify-center  '>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d616.7107837520259!2d76.95335330732148!3d11.048450392515996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8591007584757%3A0xf665e13aebb5cba0!2sCoimbatore%20ramasyamy%20Nagar%202!5e0!3m2!1sen!2sin!4v1690210456441!5m2!1sen!2sin"  
        allowfullscreen="none"
        loading="lazy"
         referrerpolicy="no-referrer-when-downgrade"
         width = '500'
         height = '300'
         className ='rounded-2xl'
         
         
         
         ></iframe>
         
         
          
         
      
    </div>

  </Section>
    
   
   
  
}

export default map
