

export default function ExperiencePage() {
    return (
        <div className='min-h-screen max-w-full'>

        <div className='flex flex-col p-5 gap-3'>
          <p className='text-5xl rounded-md bg-gradient-to-tl from-blue-900 mr-auto mb-4 '>Experience</p>
          <p className='text-2xl italic border-0 border-b-2 border-amber-500'>Work</p>
          <p className='ps-2 pe-2 bg-blue-900 bg-opacity-85 rounded-md shadow-md shadow-white'>
            
            <p className="flex font-medium text-lg justify-between">Customer Service Representative
                <p className="italic font-medium">May 2022 – August 2022</p>
            </p>
            <p className="italic font-light">DHL Express, Hamilton, Bermuda</p>

            <ul className="mb-3 list-inside list-disc font-light italic">
                <li>Face to face interaction with customers.</li>
                <li>Overcame daily logistical challenges.</li>
                <li>Provided customer support via phone and email.</li>
                <li>Actioned customer queries.</li>
                <li>Ensured packages were stored, packed, and securely given to the appropriate departments and customers.</li>
            </ul>

            <p className="flex font-medium text-lg justify-between">Information Technology Help Desk Support
                <p className="italic font-medium">Sept 2020 – Sept 2021</p>
            </p>
            <p className="italic font-light">The Bermuda College, Paget, Bermuda</p>

            <ul className="list-inside list-disc font-light italic">
                <li>Performed maintenance and repair of IT equipment such as printers, laptops, and desktop computers.</li>
                <li>Fixed day-to-day IT related issues for staff and students.</li>
                <li>Maintained and installed operating systems and network images for college systems.</li>
                <li>Part of a team that created a 360 virtual tour of the campus. </li>
                <li>Experience managing, completing, and creating tickets in Lansweeper.</li>
            </ul>

            


          </p>

          <p className='text-2xl italic border-0 border-b-2 border-amber-500'>Projects</p>
          <p className='ps-2 pe-2 bg-blue-900 bg-opacity-85 rounded-md shadow-md shadow-white'>

            <p className="flex font-medium text-lg justify-between">Web Portfolio
                <p className="italic font-medium">July 2024 - Present</p>
            </p>

            <ul className="mb-3 list-inside list-disc font-light italic">
                <li>Designed and coded a web portfolio/resume using HTML, Emailjs, React.js, JavaScript and Tailwind CSS.</li>
                <li>Responsive Design with appealing visuals and content.</li>
                <li>Learned in depth knowledge of JavaScript, React framework, Tailwind CSS and overall frontend developing.</li>
            </ul>

            <p className="flex font-medium text-lg justify-between">Networking II Case Study
                <p className="italic font-medium">March 2024 - April 2024</p>
            </p>

            <ul className="mb-3 list-inside list-disc font-light italic ">
                <li>Configured a network with Cisco routers acting as sites and switches using Professors topology guide and instructions.</li>
                <li>Implemented Spanning-Tree, VTP, HSRPv2, MPLS, DMVPN Phase 3, EIGRP Routing and NTP Servers.</li>
            </ul>

            <p className="flex font-medium text-lg justify-between">Networking I Case Study
                <p className="italic font-medium">November 2023 - December 2023</p>
            </p>

            <ul className="list-inside list-disc font-light italic text-balance">
                <li>Configured a network with two Cisco routers as core routers, one as an edge router, another as an isp and switches using Professors topology guide and instructions.</li>
                <li>Designed a hierarchical IPv4 and IPv6 addressing scheme for all network devices.</li>
                <li>Enabled routing using EIGRP Named Mode, OSPFv3, MP-BGP. </li>
                <li>Implemented DHCP, PBR, Summarization, Redistribution, Static NAT, PAT.</li>
            </ul>


          </p>

        
            
        </div>
        

      
      
       


      </div>
    )
}