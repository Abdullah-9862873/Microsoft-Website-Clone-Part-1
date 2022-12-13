import React, { Component } from "react";
import asset1 from "../images/assets.jpg";
import asset2 from "../images/asset2.jpg";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export default class Slider extends Component {
  render() {
    return (
      <div>
        <div className="slider1">
          <div className="imageContainer">
            <img className="w-100%" src={asset1} alt="Product" />
          </div>
          <div className="mx-4 my-4">
            <div className="info">
              <div className="text-lg font-semibold bg-white">
                Save on select Surface
              </div>
              <div className="mb-6 mt-3 text-base bg-white">
                Unwrap possibility with hot deals on powerful, portable Surface
                devices for everyone on your list
              </div>
            </div>
            <div className="btn">
              <button className="text-white bg-black my-2 font-semibold border-sliderBtnBorder pt-[0.625rem] pb-[0.625rem] px-[0.75rem]">
                Shop Surface Devices
              </button>
            </div>
          </div>
        </div>

        <div className="slider2">
          <div className="imageContainer2">
            <img className="w-100%" src={asset2} alt="Product" />
          </div>
          <div className="mx-4 my-4">
            <div className="info">
              <div className="text-lg font-semibold bg-white">A sound gift</div>
              <div className="mb-6 mt-3 text-base bg-white">
                From silent nights to party playlists, they’ll never miss a beat
                with premium audio from Surface
              </div>
            </div>
            <div className="btn">
              <button className="text-white bg-black my-2 font-semibold border-sliderBtnBorder pt-[0.625rem] pb-[0.625rem] px-[0.75rem] items-center">
                Shop Surface Devices
              </button>
              <div className="pt-2 pb-2 pr-[1.325rem] inline-block items-center ml-8 xxsm:ml-0 xxsm:block xsm:ml-8 xsm:inline cursor-pointer font-semibold">
                Shop Surface Headphones 2{" > "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
