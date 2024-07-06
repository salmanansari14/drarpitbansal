import React from 'react'
import NavigationB from './NavigationB'
// bg-gradient-to-r from-blue-500
import LaparoscopicImage from '../assets/LaparoscopicImage.jpg'
const Head = () => {
    return (<>
        {/* <NavigationB /> */}
        <section class="text-gray-600 body-font ">
            <div class="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
                <div class="lg:flex-grow md:w-1/2 lg:pl-4 px-2 pr-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 class="title-font text-left sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Laparoscopic Surgery & Laser Treatment
                    </h1>
                    <p class="mb-8 leading-relaxed text-left">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hardkhdfg fkghkg fkghfkg fkghfgkfg  chambray.</p>
                    {/* <div class="flex justify-center">
                        <button class="inline-flex text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-900 rounded text-lg">Book Appoinment</button>
                        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Know me</button>
                    </div> */}
                </div>

                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img class="object-cover object-center rounded-tl-full" alt="hero" src={LaparoscopicImage}/>
                </div>
            </div>
        </section>
    </>
    )
}

export default Head