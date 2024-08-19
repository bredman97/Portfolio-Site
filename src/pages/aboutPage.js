import pic from '../assets/BrandonProPic.JPG';

export default function AboutPage () {
    return (

      <div className='min-h-screen max-w-full grid grid-rows-2 md:grid-cols-2'>

        <div className='flex flex-col p-5 gap-3'>
          <p className='text-5xl mb-4 '>Get To Know Me</p>
          <p className='text-2xl italic border-0 border-b-2 border-black'>Background</p>
          <p className='rounded-md shadow-md shadow-black'>
            Born and raised in Bermuda with roots and family in The Bahamas.
            I enjoy watching sports, mainly football/soccer, 
            playing games and puzzles. I like to stay busy whether that is 
            traveling, reading, learning something new or enjoying 
            the company of friends and family.
          </p>
          <p className='text-2xl italic border-0 border-b-2 border-black'>Summary</p>
          <p className='rounded-md shadow-md shadow-black'>
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
        

      
      
        <div className='relative'>
          <img className='absolute w-56 md:w-80 lg:w-8/12 mt-5 right-20 md:right-5 shadow-2xl shadow-black rounded-full' src={pic} alt='Brandon Redman'/>
        </div>


      </div>



    )
}