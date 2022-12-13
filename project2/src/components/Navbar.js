import React, { Component } from "react";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar flex justify-between p-4">
        <div className="flex justify-center items-center md:order-2">
          <div className="hamburger ustify-center cursor-pointer inline-block md:hidden">
            <div className="line h-0.5 w-6 my-1 bg-black"></div>
            <div className="line h-0.5 w-6 my-1 bg-black"></div>
            <div className="line h-0.5 w-6 my-1 bg-black"></div>
          </div>
          <div className="search md:hidden ml-3 cursor-pointer">
            <FontAwesomeIcon icon={solid("magnifying-glass")} />
          </div>
        </div>

        <div className="logo text-center md:order-1 flex">
          <div className="flex justify-center items-center">
            <img className="w-20" src={logo} alt="logo" />
          </div>
          <div className="features absolute  w-fit bg-gray-200 md:static md:w-auto md:bg-white inset-0 md:flex md:mx-4 md:space-x-2 -translate-x-96 md:-translate-x-0">
            <div className="fitem">Microsoft 365</div>
            <div className="fitem">Teams</div>
            <div className="fitem">Windows</div>
            <div className="fitem">Surface</div>
            <div className="fitem">Xbox</div>
            <div className="fitem">More</div>
          </div>
        </div>
        <div className="cart text-center md:order-3 flex">
          <div className="search hidden md:block">All Microsoft SearchIcon</div>
          <div>
            <span className="mr-1 cursor-pointer">
              <FontAwesomeIcon icon={solid("cart-shopping")} />{" "}
            </span>
            <span className="cursor-pointer">Account</span>
          </div>
        </div>
      </div>
    );
  }
}
