import React from 'react'
import Section from './common/Section'
import college from '../assests/college.png'
import HSschool from '../assests/HSschool.png'
import Hschool from '../assests/Hschool.jpeg'

const Education = () => {

  const Education = [
    {
      id:1,
      image:college,
      name:'Sri Ramakrishna Engineering College',
      comment: 'BE.Computer Science and Engineering CGPA - 7.94'
    },
    {
      id:2,
      image:college,
      name:'Sri Ramakrishna Engineering College',
      comment: 'Specialization Cyber Security CGPA - 9.4'
    },
    {
      id:3,
      image:HSschool,
      name:'Bharatiya Vidhya Bhavan',
      comment: 'HSC - 62%'
    },
    {
      id:4,
      image:Hschool,
      name:'Suguna Pip School',
      comment: 'SSLC - 77.8%'
    },
  ]






  return (
  
  <Section title='Education🖋️' subtitle = 'These are my qualifications which i have persured.' >
    <div className='max-w-xl flex flex-col gap-2'>
      {Education.map(({id,image,name,comment}) => (
        <div className='flex p-10 justify-center items-center rounded-xl shadow-md dark:shadow-rose-400 overflow-hidden duration-300 ease-out-in hover:scale-110'>
          <div className='w-1/4 p-1'>
            <img src={image} alt={name} className='w-20 h-20 object-contain'/>
          </div>
          <div className='w-2/3 flex flex-col justify-center items-center gap-3 p-2'>
            <h3 className='text-xl font-semibold'>{name}</h3>
            <p className='text-sm font-light '>{comment}</p>
          </div>
        </div>
        
      ))}
    </div>




  </Section>
    
)}

export default Education
