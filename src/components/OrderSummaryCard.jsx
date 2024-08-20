import React from 'react'
import CardHeroImage from '../assets/images/illustration-hero.svg'
import MusicIcon from '../assets/images/icon-music.svg'

const OrderSummaryCard = () => {
    return (
        <div className='md:max-w-[25rem] max-w-[20rem]  bg-white rounded-2xl overflow-hidden shadow-lg'>
            <img className='object-cover' src={CardHeroImage} alt="" />
            <div className='md:p-8 p-5 text-center'>
                <h1 className='font-black text-2xl text-Dark-blue'>Order Summary</h1>
                <p className='font-medium text-Desaturated-blue text-[15px] mt-5'>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
                <div className='flex rounded-lg p-4 justify-between items-center  gap-4 my-5 bg-Very-pale-blue'>
                    <img src={MusicIcon} alt="" />
                    <div className='flex-1 text-left'>
                        <h3 className='text-Dark-blue font-black'>Annual Plan</h3>
                        <span className='text-Desaturated-blue font-medium'>$59.99/year</span>
                    </div>
                    <a className='font-bold text-sm text-Bright-blue underline hover:opacity-70 hover:no-underline transition-all ease-in-out duration-200' href="/">Change</a>
                </div>
                <a className='font-bold block text-Very-pale-blue  bg-Bright-blue rounded-lg py-3 my-2 hover:bg-opacity-70  text-[15px] transition-all ease-in-out duration-200 drop-shadow-[0_20px_15px_rgba(56,41,224,0.35)]' href="/">Proceed to Payment</a>
                <a className='font-bold block text-Desaturated-blue rounded-lg py-2 mb-2 mt-5 hover:text-Dark-blue  text-[15px] transition-all ease-in-out duration-200' href="/">Cancel Order</a>
            </div>
        </div>
    )
}

export default OrderSummaryCard