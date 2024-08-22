import React, {useState} from 'react';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactPage() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const serviceid = 'service_0z17vcs';
        const templateid = 'template_v3gtyxi';
        const publickey = '2DMZss-u9_7lpnlGI';

        const data = {
            service_id: serviceid,
            template_id: templateid,
            user_id: publickey,
            template_params: {
                from_name: name,
                from_email: email,
                to_name: 'Brandon',
                message: message,
            }

        };


        try {
            const res = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data);
            console.log(res.data);
            toast.success('Email Sent Successfully!');
            setName('');
            setEmail('');
            setMessage('');

        } catch (error) {
            console.error(error);
            toast.error('Something Went Wrong!');

        }
    }




    return (

        <div className="min-h-screen">

            
            
            <div><ToastContainer /></div>
            <div className='flex flex-col items-center mx-auto'>
                <p className="text-center rounded-md bg-gradient-to-tl from-blue-900 mt-48 text-5xl">Contact Me</p>
            </div>
            <form onSubmit={handleSubmit} class="max-w-sm md:max-w-md mx-auto mt-10 p-4 pt-16 rounded-3xl bg-white shadow-inner shadow-black">
                <div className="relative z-0 mb-12 w-full group">
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="block w-full text-sm text-black bg-transparent border-0 border-b-2 border-black appearance-none focus:ring-0 focus:outline-none peer" placeholder=" " required/>
                    <label className="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 top-1 -z-10 origin-[0] rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-5 peer-focus:scale-75 peer-focus:-translate-y-8">Name:</label>
                </div>

                <div className="relative z-0 mb-12 w-full group">
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full text-sm text-black bg-transparent border-0 border-b-2 border-black appearance-none focus:ring-0 focus:outline-none peer" placeholder=" " required/>
                    <label className="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 top-1 -z-10 origin-[0] rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-5 peer-focus:scale-75 peer-focus:-translate-y-8">Email Address:</label>
                </div>

                <div className="relative z-0 mb-12 w-full group">
                    <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} className="overflow-x-scroll block w-full text-sm text-black bg-transparent border-0 border-b-2 border-black appearance-none focus:ring-0 focus:outline-none peer" placeholder=" " required/>
                    <label className="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 top-1 -z-10 origin-[0] rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-5 peer-focus:scale-75 peer-focus:-translate-y-8">Comments:</label>
                </div>

                <div className="">
                    <button type="submit" className="w-24 shadow-md shadow-black text-white bg-blue-700 hover:bg-blue-800 focus:outline-none rounded-full font-medium text-md">Submit</button>
                </div>

                

            
            </form>

           
        </div>

        

      
    )
}