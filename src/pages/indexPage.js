import certpic from '../assets/ccna_med.jpg';
import { Link } from 'react-router-dom';


export default function IndexPage() {

    return (
        
        <div className="flex w-full min-h-screen">
            <div className="flex flex-col items-center justify-center mx-auto">
                <p className="text-8xl pb-5">Brandon Redman</p>
                <p className="text-2xl font-light italic">Aspiring Network & CyberSecurity Engineer</p>
                <p className="text-4xl font-semibold">Bachelors of IT - Networking & IT Security</p>
                <p className="text-2xl font-light italic">3rd Year Student @ Ontario Tech University</p>
                <p className="text-4xl font-semibold">CCNA Routing & Switching</p>
                <img className='pt-5 ' src={certpic} alt='ccna cert' />
                
                <Link to='./B.RedmanResume.pdf' target='_blank' download className='inline-flex items-center gap-1 mt-5 text-lg rounded-md shadow-md shadow-black hover:bg-sky-300 hover:animate-pulse'>
                  Resume
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                    <path d="M8.75 2.75a.75.75 0 0 0-1.5 0v5.69L5.03 6.22a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-1.06-1.06L8.75 8.44V2.75Z" />
                    <path d="M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z" />
                  </svg>

                </Link>
            </div>
        </div>
    )
}