import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="flex space-x-2 mt-[2.813rem] ml-5">
            <div>
              <p>Follow Microsoft&nbsp;</p>
            </div>
            <div className="flex space-x-4">
              <span className="ml-6">
                <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
              </span>
              <span>
                <FontAwesomeIcon icon={brands("twitter")} />
              </span>
              <span>
                <FontAwesomeIcon icon={brands("linkedin")} />
              </span>
            </div>
          </div>

          <div>
            <button className="mt-3 text-center py-[0.625rem] px-12 bg-backToTopBtn text-black font-medium leading-1 cursor-pointer text-[1rem] w-[23rem] ml-4 mb-6 rounded-md">
              (Arrow up) Back to Top
            </button>
          </div>
        </div>

        <div className="bg-[#f2f2f2]">
          <div className="pl-3 ml-4">
            <h2 className="text-[#616161] text-[0.94rem] leading-5 font-semibold mt-6 pt-7">
              What's New
            </h2>
            <ul className="space-y-2 no-underline text-[#616161] text-[0.688rem]">
              <li className="cursor-pointer mt-4">Surface Pro 9</li>
              <li className="cursor-pointer">Surface Laptop 5</li>
              <li className="cursor-pointer">Surface Studio 2+</li>
              <li className="cursor-pointer">Surface Laptop Go 2</li>
              <li className="cursor-pointer">Surface Laptop Studio</li>
              <li className="cursor-pointer">Surface Duo 2</li>
              <li className="cursor-pointer">Microsoft 365</li>
              <li className="cursor-pointer">Window 11 apps</li>
            </ul>
          </div>
          <div className="pl-3 ml-4">
            <h2 className="text-[#616161] text-[0.94rem] leading-5 font-semibold mt-6 pt-7">
              Microsoft Store
            </h2>
            <ul className="space-y-2 no-underline text-[#616161] text-[0.688rem]">
              <li className="cursor-pointer mt-4">Account Profile</li>
              <li className="cursor-pointer">Download Center</li>
              <li className="cursor-pointer">Microsoft Store support</li>
              <li className="cursor-pointer">Returns</li>
              <li className="cursor-pointer">Order Tracking</li>
              <li className="cursor-pointer">Personal shopping appointments</li>
              <li className="cursor-pointer">Microsoft Store Promise</li>
              <li className="cursor-pointer">Flexible Payments</li>
            </ul>
          </div>
          <div className="pl-3 ml-4">
            <h2 className="text-[#616161] text-[0.94rem] leading-5 font-semibold mt-6 pt-7">
              Education
            </h2>
            <ul className="space-y-2 no-underline text-[#616161] text-[0.688rem]">
              <li className="cursor-pointer mt-4">Microsoft in education</li>
              <li className="cursor-pointer">Devices for education</li>
              <li className="cursor-pointer">Microsoft Teams for Education</li>
              <li className="cursor-pointer">Microsoft 365 Education</li>
              <li className="cursor-pointer">
                Education consultation appointment
              </li>
              <li className="cursor-pointer">
                Educator training and development
              </li>
              <li className="cursor-pointer">Deals for students and parents</li>
              <li className="cursor-pointer">Azure for students</li>
            </ul>
          </div>
          <div className="pl-3 ml-4">
            <h2 className="text-[#616161] text-[0.94rem] leading-5 font-semibold mt-6 pt-7">
              Business
            </h2>
            <ul className="space-y-2 no-underline text-[#616161] text-[0.688rem]">
              <li className="cursor-pointer mt-4">Microsoft Cloud</li>
              <li className="cursor-pointer">Microsoft Security</li>
              <li className="cursor-pointer">Dynamics 365</li>
              <li className="cursor-pointer">Microsoft 365</li>
              <li className="cursor-pointer">Microsoft Power Platform</li>
              <li className="cursor-pointer">Microsoft Teams</li>
              <li className="cursor-pointer">Microsoft Industry</li>
              <li className="cursor-pointer">Small Business</li>
            </ul>
          </div>
          <div className="pl-3 ml-4">
            <h2 className="text-[#616161] text-[0.94rem] leading-5 font-semibold mt-6 pt-7">
              Developer & IT
            </h2>
            <ul className="space-y-2 no-underline text-[#616161] text-[0.688rem]">
              <li className="cursor-pointer mt-4">Azure</li>
              <li className="cursor-pointer">Developer Center</li>
              <li className="cursor-pointer">Documentation</li>
              <li className="cursor-pointer">Microsoft Learn</li>
              <li className="cursor-pointer">Microsoft Tech Community</li>
              <li className="cursor-pointer">Azure Marketplace</li>
              <li className="cursor-pointer">AppSource</li>
              <li className="cursor-pointer">Visual Studio</li>
            </ul>
          </div>
          <div className="pl-3 ml-4">
            <h2 className="text-[#616161] text-[0.94rem] leading-5 font-semibold mt-6 pt-7">
              Company
            </h2>
            <ul className="space-y-2 no-underline text-[#616161] text-[0.688rem]">
              <li className="cursor-pointer mt-4">Careers</li>
              <li className="cursor-pointer">About Microsoft</li>
              <li className="cursor-pointer">Company news</li>
              <li className="cursor-pointer">Privacy at Microsoft</li>
              <li className="cursor-pointer">Investors</li>
              <li className="cursor-pointer">Diversity and inclusion</li>
              <li className="cursor-pointer">Accessibility</li>
              <li className="cursor-pointer">Sustainability</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
