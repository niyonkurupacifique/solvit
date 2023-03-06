import React, { Component } from "react";
import Footer from "./listingComponent";
import Footerbody from "./footer";
import ifoto1 from './hover-image.jpg'
import ifoto2 from './hover-image2.jpg'


class Topstory extends Component {
  render() {
    return (
      <div>
        <div className="text-white">
          <Footer />
        </div>
        <div className="flex flex-row">
         
          <div ><img src={ifoto1} className='h-full'></img> </div>
          
        </div>
        <div>
          <Footerbody />
        </div>
      </div>
    );
  }
}
export default Topstory;
