import React from 'react'
import {FaTwitter, FaInstagram, FaArrowDown, FaGithub, FaWhatsapp} from "react-icons/fa"
import avatar from '../assests/avatar.JPG'

const Profile = () => {
  
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
    {
      id:8,
      link: 'https://pdfhost.io/v/~3X9Wh.~k_Minimalist_White_and_Grey_Professional_Resume',
      
    },
    
  ];

  window.addEventListener('scroll', function (){
    const downArrow = document.querySelector(".down-arrow");

    if(this.scrollY >= 90) downArrow.classList.add('hide-down-arrow');
    else downArrow.classList.add("hide-down-arrow");


  });






  return <section className='min-h-screen flex flex-col justify-start items-center p-5 text-center'>
    <h2 className='text-5xl text-rose-600 uppercase font-sans font-bold'>R.SaiNarayan</h2>
    <h3 className='py-3 text-1xl'>Developer/Network Analayst</h3>
    <p className='max-w-xl font-light text-gray-500 '>
      Hello <span className='animate-pulse text-4xl'>✌️</span>
      I am an LTTS certified cyber security specialist with a passion for web development and computer networks.<br></br>
       
    </p>

    {/*social icons */}

    <div className='flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3'>
      {Social.map(({id, link, icon}) =>(
        <a href={link} key={id}
        target='_blank'
        rel='noopener noreferrer'
        className='cursor-pointer duration-300 hover:text-rose-600'
        >{icon}</a>
      ))}
    </div>
        {/* avatar&resume */}
    <div>
      <img src={avatar} 
      alt=""
      className='w-80 md:w-100 ,md:h-80, object-cover object-top rounded-2xl '
      />
      <a href= 'https://pdfhost.io/v/~3X9Wh.~k_Minimalist_White_and_Grey_Professional_Resume' className='flex items-center justify-center mt-10 bg-gradient-to-r from-rose-600 to-teal-400 text-white py-2 rounded-lg'>
        Resume
      </a>
    </div>

    {/* arrowdown */}
    <div className='mt-10 down-arrow'>
      <FaArrowDown className='text-black text-2xl animate-bounce'/>
    </div>



  </section>;

  
  
};

export default Profile;