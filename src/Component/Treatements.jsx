import React from "react";
// import laprscpyIcons from '../assets/icons/laprscpyIcons.png'
import hearticon from "../assets/icons/hearticon.png";
import '../Style/Style.css'
import { Link } from "react-router-dom";

const Treatements = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div>
            <h1 className="text-5xl font-bold">Treatements</h1>
        </div>
        <div class="flex flex-wrap justify-center m-4">
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md rounded-3xl trt bg-gradient-to-b from-blue-300">
            <Link class="block relative h-48 rounded p-10 overflow-hidden">
              <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src={hearticon}
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
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md rounded-3xl trt tt bg-gradient-to-b from-blue-300">
            <a class="block relative h-48 rounded p-10 overflow-hidden">
              <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src={hearticon}
              />
            </a>
            <div class="mt-4 text-center">
              <h2 class="text-gray-900 title-font text-lg font-medium">
              Laser in General Surgery
              </h2>
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md rounded-3xl trt tt bg-gradient-to-b from-blue-300">
            <a class="block relative h-48 rounded p-10 overflow-hidden">
              <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src={hearticon}
              />
            </a>
            <div class="mt-4 text-center">
              <h2 class="text-gray-900 title-font text-lg font-medium">
              Bariatric and Weight Loss Surgery
              </h2>
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md rounded-3xl trt tt bg-gradient-to-b from-blue-300">
            <a class="block relative h-48 rounded p-10 overflow-hidden">
              <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src={hearticon}
              />
            </a>
            <div class="mt-4 text-center">
              <h2 class="text-gray-900 title-font text-lg font-medium">
              Breast Clinic
              </h2>
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md rounded-3xl trt tt bg-gradient-to-b from-blue-300">
            <a class="block relative h-48 rounded p-10 overflow-hidden">
              <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src={hearticon}
              />
            </a>
            <div class="mt-4 text-center">
              <h2 class="text-gray-900 title-font text-lg font-medium">
              General Surgery
              </h2>
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md rounded-3xl trt tt bg-gradient-to-b from-blue-300">
            <a class="block relative h-48 rounded p-10 overflow-hidden">
              <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src={hearticon}
              />
            </a>
            <div class="mt-4 text-center">
              <h2 class="text-gray-900 title-font text-lg font-medium">
              Surgical Oncology
              </h2>
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Treatements;
