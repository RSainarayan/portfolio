import React from 'react'
import Section from './common/Section'
import { FaGithub, FaExternalLinkSquareAlt, FaDemocrat } from 'react-icons/fa'
import carapp from '../assests/carapp.jpg'
import fishermanapp from '../assests/fishermanapp.jpg'
import alcohol from '../assests/alcohol.jpeg'
import house from '../assests/house.jpg'


const Portfolio = () => {

  const projects = [
    {
      id:1,
      image:carapp,
      title: 'REAL TIME VEHICLE SUPPORT APPLICATION',
      github: '',
      demo:''
    },

    {
      id:2,
      image:fishermanapp,
      title: 'DETECTION OF REGIONS PRONE TO BOAT OVERTURNING',
      github: '',
      demo:''
    },

    {
      id:3,
      image:alcohol,
      title: 'ALCOHOL DETECTION SYSTEM IN CARS',
      github: '',
      demo:''
    },

    {
      id:4,
      image:house,
      title: 'SMART WATER AUTOMATION SYSTEM',
      github: '',
      demo:''
    },


  ]




  return (
    <Section
    title= 'Projects💻'
    subtitle='These are the projects I have worked on the following domain so far and gained some experirence. '
    >

      <div className='grid gap-20 lg:gap-14 lg:grid-cols-14'>
        {
          projects.map(({id,image,title,github,demo}) =>(
            <div key={id} className=' text-right text-gray-400 max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden duration-300 ease-out-in hover:scale-110'>
              <img src={image} alt={title} className=' object-left object-contain h-48 w-96'/>
              <div className='w-1/3 flex grid-flow-col justify-end p-10'>
              <h2 className='  hover:text-gray-800 text-right hover:text-center' >{title}<br></br></h2>
              <a className=' text-gray-800 hover:text-rose-400 text-2xl cursor-pointer duration-150 hover:scale-110' 
              href=''
              target='_blank'
              rel='noopener noreferrer'
              >
                <FaGithub/>
              </a>
              
              
              </div>
            </div>
          ))}        

      </div>

    </Section>
  )
}

export default Portfolio
