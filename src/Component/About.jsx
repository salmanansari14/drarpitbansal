import React from 'react'
import Arpit1 from '../assets/drapitPhotos/Arpit1.jpg'
import Arpit2 from '../assets/drapitPhotos/Arpit2.png'
import Arpit3 from '../assets/drapitPhotos/Arpit3.png'
import Arpit4 from '../assets/drapitPhotos/Arpit4.png'
import Arpit5 from '../assets/drapitPhotos/Arpit5.png'

const About = () => {
    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap">
                    <div class="flex w-full mb-20 flex-wrap">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Master Cleanse Reliac Heirloom</h1>
                        <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
                    </div>
                    <div class="flex flex-wrap md:-m-2 -m-1">
                        <div class="flex flex-wrap w-1/2">
                            <div class="md:p-2 p-1 w-1/2 border-solid border-2 border-blue-500">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={Arpit1}/>
                            </div>
                            <div class="md:p-2 p-1 w-1/2 border-solid border-2 border-blue-500">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={Arpit2}/>
                            </div>
                            <div class="md:p-2 p-1 w-full border-solid border-2 border-blue-500">
                                <img alt="gallery" class="w-full h-full object-cover object-center block" src={Arpit3}/>
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/2">
                            <div class="md:p-2 p-1 w-full border-solid border-2 border-blue-500">
                                <img alt="gallery" class="w-full h-full object-cover object-center block" src={Arpit4}/>
                            </div>
                            <div class="md:p-2 p-1 w-1/2 border-solid border-2 border-blue-500">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={Arpit5}/>
                            </div>
                            <div class="md:p-2 p-1 w-1/2 border-solid border-2 border-blue-500">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={Arpit4}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About







