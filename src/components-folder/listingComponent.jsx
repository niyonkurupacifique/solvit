import React, { Component } from "react";
import myPhoto from './weddingicon.png';
import { Link } from "react-router-dom";
class Footer extends Component {
  render() {
    return (
      <div className=' fixed w-full flex flex-row bg-headercolor h-6 justify-center space-x-6 items-center sm: text-2xl md:text-base lg:text-lg'>
        <div className='font-bold from-stone-700'><h1><span className='text-yellow-400'>L</span><span className='text-blue-800'>O</span>GO</h1></div>
        <Link to='/home'> <div className=" hover:text-hovercolor hover:font-CNNfont hover:font-CNNfONTweight">HOME</div></Link>
       <Link to='/aboutus' className=' hover:text-hovercolor hover:font-CNNfont hover:font-CNNfONTweight'>ABOUT</Link>
      <Link to='/topstory'> <div className=" hover:text-hovercolor hover:font-CNNfont hover:font-CNNfONTweight">OUR STORY</div></Link>
      <Link to='/quote'><div>QUOTES</div></Link>
      <Link to='/signin'> <div>SIGN IN</div></Link> 
        <div>RSVP</div>

        {/* <p>{this.props.name}</p> */}
      </div>
    );
  }
}
export default Footer;
