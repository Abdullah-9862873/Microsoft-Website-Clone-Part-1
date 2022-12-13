import React, { Component } from "react";
import imageAfterContainer3 from "../images/imageAfterContainer3.jpg";

export default class imageAfterContainer extends Component {
  render() {
    return (
      <div>
        <div>
          <img src={imageAfterContainer3} alt="ad" />
        </div>
        <div>
          <h2 className="font-semibold text-[1.25rem] ml-5 mb-2">
            Gaining more every down
          </h2>
        </div>
        <div>
          <p className="ml-5">
            Microsoft and the NFL are always striving to power a better game,
            from preseason to playoffs
          </p>
        </div>
        <div>
          <button className="text-white bg-black mt-2 mb-2 py-[0.625rem] px-3 ml-5">
            Read the Story
          </button>
        </div>
      </div>
    );
  }
}
