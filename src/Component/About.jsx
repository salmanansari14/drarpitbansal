import React from 'react'
import Arpit1 from '../assets/drapitPhotos/Arpit1.jpg'
import Arpit2 from '../assets/drapitPhotos/Arpit2.png'
import Arpit3 from '../assets/drapitPhotos/Arpit3.png'
import Arpit4 from '../assets/drapitPhotos/Arpit4.png'
import arpitdr from '../assets/arpitdr.png'

const About = () => {
    return (
        <>
           <section id='about' class="text-gray-600 mt-14 body-font">
            <h1 className='mx-16 text-4xl ml-32 font-bold text-5xl'>About me</h1>
            <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img class="object-cover object-center rounded" alt="hero" src={arpitdr}/>
                </div>
                <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> Dr. Arpit Bansal
                    </h1>
                        {/* <span class="hidden lg:inline-block"/>Laparoscopic & Laser Surgeon<span/> */}
                    <p class="mb-8 text-left leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                    <div class="flex justify-center">
                        <button class="inline-flex text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-900 rounded text-lg">Book Appoinment</button>
                        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Know me</button>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default About







