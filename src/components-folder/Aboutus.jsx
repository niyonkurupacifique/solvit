import React, { Component } from "react";
import Footer from "./listingComponent";
import Footerbody from "./footer";
class Aboutus extends Component {
  render() {
    return (
      <div className='min-h-screen'>
        <div className="text-center text-white">
          <Footer />
        </div>
        <div className="grid grid-cols-2 space-x-6 m-4 ">
          <div className=" mt-6 border-solid border-2 border-indigo-400">
            I'm Niyonkuru Pacifique. I'm from Musanze district in the Northern
            province of Rwanda and now I reside in Kigali city in Gitega sector.
            I have a Bachelor's degree in Computer and Software Engineering from
            the University of Rwanda. <br />I have gained valuable experience in
            the IT industry, working in both ICT support and software
            development roles. My first job was in a public secretary, where I
            provided IT support services to various departments. Later, I was
            employed by Algorithm Inc., where I started as an ICT support and
            was quickly promoted to become a software developer. My experience
            and technical skills make me confident that I am a great fit for
            this role. Thank you."
          </div>
          <div className="border-solid border-2 border-indigo-600 mt-6">
            I have been using Microsoft Dynamics for a while now. I have helped
            many different clients with their Dynamics systems, including
            Dynamics 365, Dynamics GP, and Dynamics AX. I have also helped
            clients make their Dynamics work with other systems like their CRM
            or ERP. In my previous job as a technical support engineer, I often
            fixed problems with Dynamics and showed users how to use it better.
            I know Microsoft Dynamics really well and I feel confident that I
            can help clients who use it.
          </div>
        </div>
        <div>
          <Footerbody />
        </div>
      </div>
    );
  }
}
export default Aboutus;
