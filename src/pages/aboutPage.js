import pic from '../assets/BrandonProPic.JPG';
import pic1 from '../assets/brandonpic1.jpeg';
import pic2 from '../assets/brandonpic2.jpeg';
import selfie from '../assets/brandonselfie.jpeg';
import kway from '../assets/kingsway.jpeg';
import pic3 from '../assets/me.jpg';
import { Carousel } from "flowbite-react";

export default function AboutPage () {

    return (

      <div className='min-h-screen md:h-screen max-w-full grid grid-rows-2 md:grid-cols-2'>

        <div className='flex flex-col p-5 gap-3'>
          <p className='text-5xl rounded-md bg-gradient-to-tl from-blue-900 mr-auto mb-4 '>Get To Know Me</p>
          <p className='text-2xl italic border-0 border-b-2 border-amber-500'>Background</p>
          <p className='ps-2 bg-blue-900 bg-opacity-85 rounded-md shadow-md shadow-white'>
            Born and raised in Bermuda with roots and family in The Bahamas.
            I enjoy watching sports, mainly football/soccer, 
            playing games and puzzles. I like to stay busy whether that is 
            traveling, reading, learning something new or enjoying 
            the company of friends and family.
          </p>
          <p className='text-2xl italic border-0 border-b-2 border-amber-500'>Summary</p>
          <p className='ps-2 bg-blue-900 bg-opacity-85 rounded-md shadow-md shadow-white'>
            Hardworking and detail-oriented IT
            Networking and Information Security
            student. Skilled in customer service, complex problem-solving, analytical thinking, hardware and software
            troubleshooting, and general system
            maintenance. Experienced in working in
            a team, completing projects,
            supporting co-workers and end-user
            support. Competent in Python, JavaScript,
            Cisco Routing and Switching, Office 365
            and Windows Systems. Cisco Certified Network Associate.
          </p>
        </div>
        

        <div className='px-5 py-20 -mt-24 md:px-2 md:h-[38rem] md:pb-0 md:pt-32 lg:h-[48rem] lg:mr-3'>
          <Carousel pauseOnHover sl slideInterval={5000} className='relative'>
            <img className='lg:size-[46rem] '
            src={pic} 
            alt='Brandon Redman'/>

            <img className='lg:size-[46rem]'
            src={pic1} 
            alt='Brandon Redman'/>

            <img className='lg:size-[46rem]'
            src={pic2} 
            alt='Brandon Redman'/>

            <img className='lg:size-[46rem]'
            src={pic3} 
            alt='Brandon Redman'/>

            <img className='lg:size-[46rem]'
            src={kway} 
            alt='lake landscape'/>

            <img className='lg:size-[46rem]'
            src={selfie} 
            alt='Brandon Redman selfie'/>

          </Carousel>
        </div>
        
        


      </div>



    )
}