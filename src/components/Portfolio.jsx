import React from 'react'
import Section from './common/Section'
import { FaGithub, FaExternalLinkSquareAlt, FaDemocrat } from 'react-icons/fa'
import carapp from '../assests/carapp.jpg'
import alcohol from '../assests/alcohol.jpeg'
import house from '../assests/house.jpg'
import fishermanapp from '../assests/fishermanapp.jpg'
import rnode from '../assests/rnode.png'


const Portfolio = () => {

  const projects = [
    {
      id:1,
      image:carapp,
      title:'REAL TIME VEHICLE SUPPORT APPLICATION',
      github: '',
      demo:''
    },

    {
      id:2,
      image:rnode,
      title:'DETECTION OF REGIONS PRONE TO BOAT OVERTURNING',
      github: '',
      demo:''
    },

    {
      id:3,
      image:alcohol,
      title:'ALCOHOL DETECTION SYSTEM IN CARS',
      github: '',
      demo:''
    },

    {
      id:4,
      image:house,
      title:'SMART WATER AUTOMATION SYSTEM',
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
            <div key={id} className=' justify-items-center text-gray-400 max-w-xl flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden duration-300 ease-out-in'>
              <img src={image} alt={title} className=' mt-5 object-scale-down justify-items-center h-48 w-96'/>
              <div className='mt-5 w-1/3 flex flex-row justify-items-center p-3'>
              <h2 className=' mt-5  hover:text-gray-800 text-left hover:text-center' >{title}</h2>
              <a className='text-gray-800 hover:text-rose-400 text-xl cursor-pointer duration-150 hover:scale-110' 
              href='https://github.com/RSainarayan'
              target='_blank'
              rel='noopener noreferrer'
              >
                <FaGithub className="grid grid-cols-3 gap-10 place-items-end h-56 me-5"/>
              </a>
              
              
              </div>
            </div>
          ))}        

      </div>

    </Section>
  )
}

export default Portfolio
