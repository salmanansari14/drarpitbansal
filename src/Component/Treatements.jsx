import React from "react";
// import laprscpyIcons from '../assets/icons/laprscpyIcons.png'
import hearticon from "../assets/icons/hearticon.png";
import lapro2 from "../assets/icons/Treatment/lapro2.png";
import operatingroom from "../assets/icons/Treatment/operatingroom.png";
import laser1 from "../assets/icons/Treatment/laser1.png";
import stomach from "../assets/icons/Treatment/stomach.png";
import clinic1 from "../assets/icons/Treatment/clinic1.png";
import surgery from "../assets/icons/Treatment/surgery.png";
import '../Style/Style.css'
import { Link } from "react-router-dom";

const Treatements = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-1 py-8 mx-auto">
        <div>
          <h1 className="text-5xl font-bold">Treatments</h1>
        </div>
        <div class="flex flex-wrap justify-center m-4">
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md rounded-3xl trt bg-gradient-to-b from-blue-200">
            <Link to='advanceLaparoscopy'>
              <Link to='advanceLaparoscopy' class="block relative h- rounded p-5 overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src={lapro2}
                />
              </Link>
              <div class="mt-4 text-center">
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  Advance Laparoscopic Surgery
                </h2>
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
              </div>
            </Link>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md rounded-3xl trt bg-gradient-to-b from-blue-200">
            <Link to='generalSurery'>
              <Link to='generalSurery' class="block relative h- rounded p-5 overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src={operatingroom}
                />
              </Link>
              <div class="mt-4 text-center">
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  General Surgery
                </h2>
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
              </div>
            </Link>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md rounded-3xl trt tt bg-gradient-to-b from-blue-200">
          <Link to='lasersurgery'>
            <Link to='lasersurgery' class="block relative h- rounded p-5 overflow-hidden">
              <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src={laser1}
                />
            </Link>
            <div class="mt-4 text-center">
              <h2 class="text-gray-900 title-font text-lg font-medium">
                Laser in General Surgery
              </h2>
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
          </div>
              </Link>
            </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md rounded-3xl trt tt bg-gradient-to-b from-blue-200">
          <Link to='bariaticweightloss'>
            <Link to='bariaticweightloss' class="block relative h- rounded p-5 overflow-hidden">
              <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src={stomach}
                />
            </Link>
            <div class="mt-4 text-center">
              <h2 class="text-gray-900 title-font text-lg font-medium">
                Bariatric and Weight Loss Surgery
              </h2>
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
            </div>
              </Link>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md rounded-3xl trt tt bg-gradient-to-b from-blue-200">
          <Link to='breastclinic'>
            <Link to='breastclinic' class="block relative h- rounded p-5 overflow-hidden">
              <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src={clinic1}
                />
            </Link>
            <div class="mt-4 text-center">
              <h2 class="text-gray-900 title-font text-lg font-medium">
                Breast Clinic
              </h2>
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
            </div>
              </Link>
          </div>
          <div class="lg:w-1/4 border md:w-1/2 p-4 w-full shadow-md rounded-3xl trt tt bg-gradient-to-b from-blue-200">
          <Link to='surgicaloncology'>
            <Link to='surgicaloncology' class="block relative h- rounded p-5 overflow-hidden">
              <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src={surgery}
                />
            </Link>
            <div class="mt-4 text-center">
              <h2 class="text-gray-900 title-font text-lg font-medium">
                Surgical Oncology
              </h2>
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
            </div>
                </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Treatements;
