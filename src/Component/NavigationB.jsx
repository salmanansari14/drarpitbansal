// import React from 'react'
// import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
// import '../Style/Style.css'
// import './Style.css'

// const NavigationB = () => {
//     return (
//         <>
//             <nav className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-100">
//                 <div className="max-w-5xl mx-auto px-4">
//                     <div className="navv flex items-center justify-between h-16 navv ">
//                         <span className="text-2xl text-gray-900 font-semibold">Laparoscopy</span>
//                         <div className="flex space-x-4 text-gray-900">
//                             <a href="#">Home</a>
//                             <a href="#about">About</a>
//                             <a href="#achievements">Achievements</a>
//                             <a href="#contact">Contact</a>
//                         </div>


//                         <Menu as="div" className="relative inline-block text-left">
//                             <div>
//                                 <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
//                                     Options
//                                     <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
//                                 </MenuButton>
//                             </div>

//                             <MenuItems
//                                 transition
//                                 className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
//                             >
//                                 <div className="py-1">
//                                     <MenuItem>
//                                         <a
//                                             href="#"
//                                             className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
//                                         >
//                                             Account settings
//                                         </a>
//                                     </MenuItem>
//                                     <MenuItem>
//                                         <a
//                                             href="#"
//                                             className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
//                                         >
//                                             Support
//                                         </a>
//                                     </MenuItem>
//                                     <MenuItem>
//                                         <a
//                                             href="#"
//                                             className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
//                                         >
//                                             License
//                                         </a>
//                                     </MenuItem>
//                                     <form action="#" method="POST">
//                                         <MenuItem>
//                                             <button
//                                                 type="submit"
//                                                 className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
//                                             >
//                                                 Sign out
//                                             </button>
//                                         </MenuItem>
//                                     </form>
//                                 </div>
//                             </MenuItems>
//                         </Menu>
//                     </div>
//                 </div>
//             </nav>

//         </>
//     )
// }

// export default NavigationB

import React, { useState } from 'react';
import arpitdr from "../assets/arpitdr.png"

function NavigationB() {
 const [isOpen, setIsOpen] = useState(false);

 return (
   <nav className="flex items-center justify-between flex-wrap p-6">
     <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
       <img src={arpitdr} className="w-100 h-10 mr-2" alt="Logo" />
     </div>
     <div className="block lg:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
       >
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
         </svg>
       </button>
     </div>
     <div
       className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
     >
       <div className="text-sm lg:flex-grow">
         <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           First Link
         </a>
         <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           Second Link
         </a>
         <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           Third Link
         </a>
         <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           Fourth Link
         </a>
       </div>
       <div>
         <button className="inline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white">
           Click Me
         </button>
       </div>
     </div>
   </nav>
 );
}
export default NavigationB;