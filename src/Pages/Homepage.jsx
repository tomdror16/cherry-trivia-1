import React from 'react'
import header from '../Images/header.svg'
import { Link } from 'react-router-dom'
import apple from '../Images/apple.svg'
import google from '../Images/google.png'


function Home() {
    return (
        <div className='text-center'>
            <img className='w-[80%] md:w-[368px] m-auto mt-0 2xl:mt-10 min-h-[244px]' src={header} alt="Header" />
            <h1 className='text-[28px] max-w-[90%] md:text-[34px] lg:text-[48px] xl:text-[64px] mt-4 text-brown font-bold m-auto'>Pick Your Brain, Harvest the Glory!</h1>

            <p className='max-w-[90%] lg:max-w-[1024px] text-gray-600 font-regular text-center m-auto my-6 md:text-[16px] lg:text-[20px] mb-0'>Welcome to The Cherry Trivia! Ready to fight for the title of today's champion? Dive into a sea of questions, with no repeats and fresh ones added regularly. Earn points for every correct answer and opt for larger sessions to boost those points even further. Before diving in, kindly review our Terms and Conditions. Let's get started!</p>

<div className='flex justify-center gap-8 items-center'>
    <Link to={'#'}><img className='w-[250px]' src={google} alt='Google'/></Link>
    <Link to={'#'}><img className='w-[250px]' src={apple} alt='Apple'/></Link>
</div>

            <div className='flex justify-center gap-4 mb-4 flex-wrap md:flex-nowrap'>
                <Link to="/terms"><button className='bg-transparent border-[1px] border-green py-2.5 px-8 rounded-[100px] duration-200 text-green text-[16px]'>Terms and Conditions</button></Link>
                <Link to="/privacy"><button className='bg-[#26B35E] py-2.5 px-8 rounded-[100px] duration-200 text-white text-[16px] hover:bg-[#26B35E]/80'>Privacy Policy</button></Link>
                <Link to="https://truffle-live.vercel.app/" target='_blank'><button className='bg-black py-2.5 rounded-[100px] text-white px-16 text-[16px] duration-200 hover:bg-black/90'>Developer’s Account</button></Link>
            </div>



            <p className='max-w-[90%] m-auto mt-12 text-gray opacity-50'>“Truffle Live Limited” 11/F., Unit B, Winbase Centre, 208 Queen’s Road Central, Sheung Wan, Hong Kong, Phone: <Link to={'tel:+ 852 2157 3121'}>+ 852 2157 3121</Link></p>
            <p className='mt-4 text-gray opacity-50 mb-8'>© 2023 Cherry Trivia Limited. All Rights Reserved</p>
        </div>
    )
}

export default Home