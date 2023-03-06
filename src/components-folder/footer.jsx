import React,{Component} from "react";
import twitteri from './twitter-icon.png'
import inst from './inst-icon.png'
import face from './facebook-icon.png'
class Footerbody extends Component{
    render(){
        return(
            
            <div className=' flex space-x-3  justify-center text-center text-white bg-black h-6 fixed bottom-1 w-full left-0'>
                
        <img className='h-6' src={twitteri} alt="twitter" />
        <img className='h-6' src={inst} alt="twitter" />
        <img className='h-6' src={face} alt="twitter" />
        <div className="flex flex-col justify-center">
            <p>copyright@2023</p>
        </div>
                
            </div>
            
           
            
        )
    }
}
export default Footerbody