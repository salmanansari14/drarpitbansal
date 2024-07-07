import React from "react";
// bg-gradient-to-r from-blue-500
import LaparoscopicImage from "../assets/LaparoscopicImage.jpg";
const Head = () => {
  return (
    <>
      <section class="text-gray-600 body-font ">
        <div class="container mx-auto w-11/12 flex px-2 pt-28 pb-16 md:pt-32 lg:pt-56 lg:w-4/5 md:flex-row text-center flex-col items-center">
          <div class="pr-0 w-11/12 m-auto text-center flex flex-col md:w-1/2 md:pr-8 lg-pr-8 md:items-start lg:flex-grow lg:pl-4">
            <h1 class="title-font sm:text-4xl md:text-left text-3xl mb-4 font-medium text-gray-900">
              Laparoscopic Surgery & Laser Treatment
            </h1>
            <p class="mb-8 leading-relaxed md:text-left">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hardkhdfg fkghkg fkghfkg fkghfgkfg chambray.
            </p>
          </div>

          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-4/5 mb-10 md:mb-0">
            <img
              class="border-2 border-blue-500 border-gradient-to-r from-blue-500 object-cover object-center rounded-2xl md:rounded-tl-full"
              alt="hero"
              src={LaparoscopicImage}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
{
  /* <div class="flex justify-center">
                        <button class="inline-flex text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-900 rounded text-lg">Book Appoinment</button>
                        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Know me</button>
                    </div> */
}
