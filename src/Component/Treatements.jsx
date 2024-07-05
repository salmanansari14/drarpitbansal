import React from 'react'
// import laprscpyIcons from '../assets/icons/laprscpyIcons.png'
import hearticon from '../assets/icons/hearticon.png'

const Treatements = () => {
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div className='my-9'>
                    <h1 className='text-4xl font-bold'>TREATEMENTS</h1>
                </div>
                <div class="flex flex-wrap -m-4">
                    <div class="lg:w-1/4 m-3 md:w-1/2 p-4 w-full shadow">
                        <a class=" text-blue-600 block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" class="object-cover object-center w-36 h-36 block" src={hearticon} />
                        </a>
                        <div class="mt-4">
                            <h2 class="text-gray-900 title-font text-lg font-medium">Advance Laparoscopy Surgery</h2>
                            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                        </div>
                    </div>
                    <div class="lg:w-1/4 m-4 md:w-1/2 p-4 w-full shadow">
                        <a class="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" class="object-cover object-center w-36 h-36 block" src={hearticon} />
                        </a>
                        <div class="mt-4">
                            <h2 class="text-gray-900 title-font text-lg font-medium">LASER in General Surgery</h2>
                            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                        </div>
                    </div>
                    <div class="lg:w-1/4 m-4 md:w-1/2 p-4 w-full shadow">
                        <a class="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" class="object-cover object-center w-36 h-36 block" src={hearticon} />
                        </a>
                        <div class="mt-4">
                            <h2 class="text-gray-900 title-font text-lg font-medium">Bariatric and Weight Loss Surgery </h2>
                            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                        </div>
                    </div>
                    <div class="lg:w-1/4 m-4 md:w-1/2 p-4 w-full shadow">
                        <a class="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" class="object-cover object-center w-36 h-36 block" src={hearticon} />
                        </a>
                        <div class="mt-4">
                            <h2 class="text-gray-900 title-font text-lg font-medium">Breast Clinic </h2>
                            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                        </div>
                    </div>
                    <div class="lg:w-1/4 m-4 md:w-1/2 p-4 w-full shadow">
                        <a class="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" class="object-cover object-center w-36 h-36 block" src={hearticon} />
                        </a>
                        <div class="mt-4">
                            <h2 class="text-gray-900 title-font text-lg font-medium">General Surgery</h2>
                            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                        </div>
                    </div>
                    <div class="lg:w-1/4 m-4 md:w-1/2 p-4 w-full shadow">
                        <a class="block relative text-center h-48 rounded overflow-hidden">
                            <img alt="ecommerce" class="object-cover object-center w-36 h-36 block" src={hearticon} />
                        </a>
                        <div class="mt-4">
                            <h2 class="text-gray-900 title-font text-lg font-medium">Surgical Oncology</h2>
                            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Treatements