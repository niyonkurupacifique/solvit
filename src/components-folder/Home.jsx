import React, { Component } from "react";
import Footer from "./listingComponent";
import ifoto from "./impeta.jpg";
import backphoto from "./back-ground.jpg";
import Footerbody from "./footer";
import OurLoveStory from "./ourLoveStory";

class Home extends Component {
  render() {
    return (
      <div className="flex flex-col min-h-screen overflow-hidden">
        <div
          className="bg-cover bg-center h-screen"
          style={{ backgroundImage: `url(${backphoto})` }}
        >
          <div className="text-white p-9  text-8xl"><Footer/></div>
          <div className="flex-grow overflow-auto">
            <div className="text-center mt-6 space-y-6">
              <p className="text-black font-">the wedding of</p>
              <p className="font-serif text-5xl text-black">ROBBIE & MAGIE</p>
            </div>
            <div className="flex justify-center mt-6">
              <img className="h-6 w-200" src={ifoto} alt=""></img>
            </div>
            <div className="flex justify-center">
              <div className="inline-block ml mt-5 text-center font-bold box-border w-20 h-10 p-4 border-4 bg-bordercolor">
                3 June 2022
              </div>
            </div>
            
          </div>

         

        </div>
        <OurLoveStory/>
        <div className="bg-black text-center text-white h-6">
          <Footerbody />
        </div>
      </div>
    );
  }
}

export default Home;
