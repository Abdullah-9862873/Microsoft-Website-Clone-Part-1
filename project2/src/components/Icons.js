import React, { Component } from "react";
import icon1 from "../images/icon1.webp";
import icon2 from "../images/icon2.webp";
import icon3 from "../images/icon3.webp";
import icon4 from "../images/icon4.webp";
import icon5 from "../images/icon5.webp";
import icon6 from "../images/icon6.webp";

export default class Icons extends Component {
  render() {
    return (
      <div className="w-fit flex justify-center items-center flex-wrap">
        <div className="icon1 flex flex-col justify-center items-center mx-6 my-4">
          <img src={icon1} alt="icon" />
          <p className="underline font-semibold cursor-pointer box-border">
            Shop Surface Device
          </p>
        </div>
        <div className="icon2 flex flex-col justify-center items-center mx-6 my-4">
          <img src={icon2} alt="icon" />
          <p className="underline font-semibold cursor-pointer box-border">
            Shop Surface Device
          </p>
        </div>
        <div className="icon3 flex flex-col justify-center items-center mx-6 my-4">
          <img src={icon3} alt="icon" />
          <p className="underline font-semibold cursor-pointer box-border">
            Shop Surface Device
          </p>
        </div>
        <div className="icon4 flex flex-col justify-center items-center mx-6 my-4">
          <img src={icon4} alt="icon" />
          <p className="underline font-semibold cursor-pointer box-border">
            Shop Surface Device
          </p>
        </div>
        <div className="icon5 flex flex-col justify-center items-center mx-6 my-4">
          <img src={icon5} alt="icon" />
          <p className="underline font-semibold cursor-pointer box-border">
            Shop Surface Device
          </p>
        </div>
        <div className="icon6 flex flex-col justify-center items-center mx-6 my-4">
          <img src={icon6} alt="icon" />
          <p className="underline font-semibold cursor-pointer box-border">
            Shop Surface Device
          </p>
        </div>
      </div>
    );
  }
}
