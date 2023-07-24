import React from 'react'
import Section from './common/Section'
import Html from "../assests/Html.png"
import js from "../assests/js.png"
import flutter from "../assests/flutter.png"
import css from '../assests/css.png'
import nodejs from '../assests/nodejs.png'
import mongo from '../assests/mongodb.png'
import nmap from '../assests/nmap.png'
import wireshark from '../assests/Wireshark.png'
import burpsuite from '../assests/burpsuite.png'
import react from '../assests/react.png'


const Services = () => {
    const Services = [
        {
            id:1,
            image: Html,
            title: 'Html'
        },
        {
            id:2,
            image: css,
            title: 'CSS'
        },
        {
            id:3,
            image: js,
            title: 'Java Script'
        },
        {
            id:4,
            image: react,
            title: 'React JS'
        },
        {
            id:5,
            image: flutter,        
            title: 'Flutter'
        },
        {
            id:6,
            image: nodejs,
            title: 'NodeJS'
        },
        {
            id:7,
            image: mongo,
            title: 'MongoDB'
        },
        
        {
            id:9,
            image: nmap,
            title: 'NMap'
        },
        {
            id:10,
            image: burpsuite,
            title: 'BurpSuite'
        },
        {
            id:11,
            image: wireshark,
            title: 'Wireshark'
        },

    ];


  return (
   <Section className = 'min-h-screen flex flex-col justify-start items-center p-5 text-center' title='Overview'
   subtitle="Hey there! I am a passionate and versatile professional with a strong background in web development and cybersecurity. I specialize in crafting secure and dynamic web solutions to address the ever-evolving digital landscape."
   
   >
    <div className='grid gap-10 grid-cols-5'>
        {
            Services.map(({id, image, title}) => (
                <div key={id} className='flex flex-col items-center justify-center p-5 shadow-lg dark:shadow-red-600 rounded-xl duration-300 ease-in-out hover:scale-110 transition-all duration-300'>
                    <img src = {image} alt={title} className='w-36 h-36 md:h-44 object-contain'/>
                    <h3 className='animate-pulse text-grey-400 top-1 mt-5 text-base'>{title}</h3>

                </div>
            ))
              
            
        }

    </div>

   </Section>
  )
}

export default Services
