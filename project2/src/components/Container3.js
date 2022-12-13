import React, { Component } from "react";
import image1Container3 from "../images/image1Container3.jpg";
import image2Container3 from "../images/image2Container3.webp";
import image3Container3 from "../images/image3Container3.webp";
import image4Container3 from "../images/image4Container3.webp";

export default class Container3 extends Component {
  render() {
    return (
      <div className="mt-11">
        <div className="font-semibold mb-3 ml-5 text-[1.5rem]">
          For Business
        </div>
        <div className="cursor-pointer">
          <div>
            <img
              className="w-[90%] m-auto"
              src={image1Container3}
              alt="product"
            />
          </div>
          <div>
            <span className="bg-[#950c17] text-white inline-block py-[0.3rem] px-3 text-base cursor-pointer mt-[0.9rem] mb-2 ml-5">
              New
            </span>
          </div>
          <div>
            <h2 className="font-semibold text-[1.3125rem] mb-2 leading-5 ml-5">
              Surface Pro 9 for Business
            </h2>
          </div>
          <div>
            <p className="ml-5">
              {" "}
              Empower flexible, all-day impact with tablet portability and
              laptop performance.{" "}
            </p>
          </div>
          <div>
            <button className="text-[#950C17] pr-[1.3125em] mt-[1.375rem] mb-14 ml-5">
              Shop now {" > "}
            </button>
          </div>
        </div>
        <div className="cursor-pointer">
          <div>
            <img
              className="w-[90%] m-auto"
              src={image2Container3}
              alt="product"
            />
          </div>
          <div>
            <h2 className="font-semibold text-[1.3125rem] mb-2 leading-5 ml-5 mt-4">
              Get Microsoft Teams for free
            </h2>
          </div>
          <div>
            <p className="ml-5">
              {" "}
              Online meetings, chat, and shared cloud storage—all in one place.{" "}
            </p>
          </div>
          <div>
            <button className="text-[#950C17] pr-[1.3125em] mt-[1.375rem] mb-14 ml-5">
              Sign up for free {" > "}
            </button>
          </div>
        </div>
        <div className="cursor-pointer">
          <div>
            <img
              className="w-[90%] m-auto"
              src={image3Container3}
              alt="product"
            />
          </div>
          <div>
            <h2 className="font-semibold text-[1.3125rem] mb-2 leading-5 ml-5 mt-4">
              Welcome to your Windows 365 Cloud PC
            </h2>
          </div>
          <div>
            <p className="ml-5">
              {" "}
              Securely stream your Windows experience from the Microsoft cloud
              to any device.{" "}
            </p>
          </div>
          <div>
            <button className="text-[#950C17] pr-[1.3125em] mt-[1.375rem] mb-14 ml-5">
              Get it today {" > "}
            </button>
          </div>
        </div>
        <div className="cursor-pointer">
          <div>
            <img
              className="w-[90%] m-auto"
              src={image4Container3}
              alt="product"
            />
          </div>
          <div>
            <h2 className="font-semibold text-[1.3125rem] mb-2 leading-5 ml-5 mt-4">
              Thrive in a hybrid world
            </h2>
          </div>
          <div>
            <p className="ml-5">
              {" "}
              Discover tools, resources, and strategies to help your employees
              succeed in the new world of flexible work.{" "}
            </p>
            <button className="text-[#950C17] pr-[1.3125em] mt-[1.375rem] mb-14 ml-5">
              Learn more {" > "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
