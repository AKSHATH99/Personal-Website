import React from 'react'

const Contact = () => {
   
  return (
    <div id='contact' className=''>
      <div className='text-3xl font-bold border-b-8 w-max border-orange-600 md:ml-56 ml-20 shadow-xl' >
      CONTACT ME
      </div>
      <p className=' md:ml-44 m-10 text-xl'>I  am looking forward to collaborate and gain experiance . Feel free to drop me a DM or mail me </p>
      <div className=' mt-3 flex'>
      <div class='border border-black md:w-max p-5 md:ml-40 m-6 rounded-lg shadow-xl'>
    <div class='flex items-center mt-3'>
        <img class='w-12 h-12' src='/images/mail.png' />
        <a href="mailto:akshathpkk@gmail.com"> <p class='ml-4 text-lg font-semibold'>akshathpkk@gmail.com</p></a>
    </div>
    <div class='flex items-center mt-3'>
        <img class='w-12 h-12' src='/images/phone.png' />
        <a href="tel:+918590518257">  <p class='ml-4 text-lg font-semibold'>8590518257</p></a>
    </div>

<div class='flex items-center mt-3'>
    <img class='w-12 h-12' src='/images/linkedin-orange.png' />
    <a href="https://www.linkedin.com/in/akshath-p-519939287/" target="_blank"><p class='ml-4 text-lg font-semibold'>LinkedIn</p></a>
</div>
<div class='flex items-center mt-3'>
    <img class='w-8 h-8 ml-2' src='/images/x-orange.png' />
    <p class='ml-4 text-lg font-semibold'><a href='https://twitter.com/AkshathP2' target='_blank'>X</a></p>
</div>
<div class='flex items-center mt-3'>
    <img class='w-10 h-10' src='/images/git-orange.png' />
    <a href='https://github.com/AKSHATH99' target='_blank'><p class='ml-4 text-lg font-semibold'>GitHub</p></a>
</div>


</div>

      <div className='md:block hidden'>
        <img src='/images/contact image.png'/>
       
      </div>
      </div>
    </div>
  )
}

export default Contact
