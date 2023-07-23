import React from 'react'
import Section from './common/Section'
import {FaTwitter, FaInstagram, FaArrowDown, FaGithub, FaWhatsapp} from "react-icons/fa"
import chat from '../assests/chat.png'

const Contact = () => {
    const Social = [
        {
          id:1,
          link: 'https://twitter.com',
          icon: <FaTwitter/>
        },
        {
          id:2,
          link: 'https://Instagram.com',
          icon: <FaInstagram/>
        },
        {
          id:1,
          link: 'https://github.com',
          icon: <FaGithub/>
        },
        {
            id:1,
            link: 'https://wa.me/9944455321',
            icon: <FaWhatsapp/>
          },
        
        
      ];

  return (
    <Section title = 'Contact 📱' subtitle = "Get in touch with me soon :)">

        <div className='flex flex-col items-center justify-center gap-8 text-center'>
            <div>
                <img src={chat} alt='Contact Info' className='w-32 h-32'/>

            </div>
            <div>
                <p className='max-w-xs md:max-w-lg font-extralight'>I am open to talk regarding freelancing or full-time opportunities.Feel free to contact me using your prefered medium.</p>
            </div>
            <div className='flex w-full items-center justify-evenly text-3xl'>
                {Social.map(({id, link, icon}) => (
                    <a href={link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className=' duration-200 ease-in-out hover:text-rose-400'>
                        {icon}
                        </a>
                )
                )}
            </div>
                        {/* Form */}
            <div className='p-8 text-left w-full'>
                <form action='https://getform.io/f/ec40aca5-cd95-4b25-8d1c-a5db0425c2e2' method='POST'>
                    <div className='gap-10 w-full'>
                        <div className='flex flex-col'>
                            <label className='capitalize text-sm py-2 font-extralight '>Name</label>
                            <input type='text' name='name' className='border-2 rounded-lg p-3 flex focus:outline border-gray-400 dark:bg-gray-900 dark:text-white'></input>
                        </div>

                        <div className='flex flex-col'>
                            <label className='capitalize text-sm py-2 font-extralight '>Phone</label>
                            <input type='text' name='phone' className='border-2 rounded-lg p-3 flex focus:outline border-gray-400 dark:bg-gray-900 dark:text-white'></input>
                        </div>

                        <div className='flex flex-col'>
                            <label className='capitalize text-sm py-2 font-extralight '>Email</label>
                            <input type='text' name='email' className='border-2 rounded-lg p-3 flex focus:outline border-gray-400 dark:bg-gray-900 dark:text-white'></input>
                        </div>

                        <div className='flex flex-col'>
                            <label className='capitalize text-sm py-2 font-extralight '>Message</label>
                            <textarea name='message' rows='30' className='border-2 rounded-lg p-3 flex focus:outline border-gray-400 dark:bg-gray-900 dark:text-white resize-none'></textarea>
                            
                        </div>





                    </div>
                    <div className='flex items-center justify-center '>
                        <button className='my-8 bg-gradient-to-r from-orange-400 to-teal-300 text-white px-6 py-3  font-sans uppercase rounded-md tracking-widest cursor-pointer hover:scale-105 duration-200 '>Send Message</button>

                    </div>


            


                </form>
            </div>



        </div>









    </Section>
  )
}

export default Contact