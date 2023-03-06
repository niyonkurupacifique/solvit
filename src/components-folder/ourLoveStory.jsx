import React,{Component} from "react";
import bride from './bride-9XEYR7C.jpg';
import groom from './groom-9XEYR7C.jpg'
import gromomi from './groom-icon.png'
import bridi from './bride-icon.png'
import hoverI1 from './hover-image2.jpg'
import hoverI2 from './hover-image.jpg'

class OurLoveStory extends Component{
    render(){
        return(
           <div className="flex flex-col flex-grow bg-white  w-screen m-auto mt-6 space-y-5">
                <h1 className='text-center font-bold text-3xl text-blackk'>OUR LOVE STORY</h1>
                <p className="text-black text-center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                <div className='flex justify-center'>
                <div className='space-y-3 mr-5 hover:text-hovercolor hover:font-CNNfont hover:font-CNNfONTweight'> 
                    <img src={gromomi} className='h-6'></img>
                    <p>ROBBIE DARWIN</p>
                    <p>09.06.1998</p>
                    <p>Accusamus et iusto odio<br/> dignissimos ducimus qui <br/>blanditiis praesentium <br/>voluptatum deleniti </p>
                </div>
                <div className=' hover:bg-hovercolor inline-block box-border border-black h-6 w-1/4 '>
                    <img src={groom} ></img>
                </div>
                <div className=' rounded-full h-6 w-6 border border-yellow-500 bg-white text-black mt-auto mb-5 text-center'>&</div>
                <div className='inline-block box-border border-black h-6 w-1/4'>
                    <img src={bride} ></img>
                </div>
                <div className='space-y-3 ml-5  hover:text-hovercolor hover:font-CNNfont hover:font-CNNfONTweight'> 
                    <img src={bridi} className='h-6'></img>
                    <p>ROBBIE DARWIN</p>
                    <p>09.06.1998</p>
                    <p>Accusamus et iusto odio<br/> dignissimos ducimus qui <br/>blanditiis praesentium <br/>voluptatum deleniti </p>
                </div>
                </div>
                <div  className='flex bottom-1 items-center text-white'>
                <div>
               hhhhhhhhhhhhh<br/>
               hhhhhhhhhhhhh<br/>
               hhhhhhhhhhhhh<br/>
               hhhhhhhhhhhhh<br/>
               hhhhhhhhhhhhh<br/>
               hhhhhhhhhhhhh<br/>
               </div>
               </div>
           </div> 
        )
    }
}
export default OurLoveStory
