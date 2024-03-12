import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col
    gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row '>
        <div className='hero-img' />
        {/* Overly for the background image */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Left */}
        <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
            <Image 
                src="/top-img.png"
                alt='Food'
                width={50}
                height={50}
                className='absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]'
            />
            <h1 className='bold-52 lg:bold-88 text-green-200'>
                Discover the Exquisite Flavors of Kerala
            </h1>
            <p className='regular-16 mt-6 text-red-100 xl:max-w-[520px]'>
                Embark on a culinary adventure through the vibrant state of Kerala, where each dish tells a story of rich tradition and unparalleled flavor. Our website is a gateway to the heart of Kerala's cuisine, offering a tantalizing array of recipes that showcase the region's unique blend of spices, coconut-infused delights, and time-honored cooking techniques. From aromatic curries to crispy fried snacks, every recipe is a celebration of Kerala's culinary heritage. Whether you're a seasoned cook or a curious food enthusiast, join us as we explore the diverse and delectable world of Kerala cuisine, where every bite is a journey to paradise.
            </p>
            <div className='my-11 flex flex-wrap gap-5'>
                <div className='flex items-center gap-2'>
                    {Array(5).fill(1).map((_, index) =>(
                        <Image 
                            src="/star.svg"
                            key={index}
                            width={24}
                            height={24} 
                            alt="star"                        />
                    ))}
                </div>
                <p className='bold-16 lg:bold-20 text-green-300'>
                    198k
                    <span className='regular-16 lg:regular-20 ml-1'>Excellent Reviews</span>
                </p>
            </div>
            <div className='flex flex-col w-full gap-3 sm:flex-row'>
                <Button 
                    type='button'
                    title='Download App'
                    variant='btn_green'
                />
                <Button 
                    type='button'
                    title='How we work'
                    icon='/play.svg'
                    variant='btn_white_text'
                />
            </div>
        </div>
    </section>
  )
}

export default Hero