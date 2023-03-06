import React, { Component } from "react";
import Footerbody from "./footer";
import { Link } from "react-router-dom";
class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="bg-blackk  text-white w-screen">
          <h1 className="flex p-3 item-center">start bootstrap</h1>

          
        </div>
        <div className="flex flex-row">
          <div className="bg-black h-screen w-1/6 flex flex-col space-y-4">
            <div className="text-white p-2 text-sm">core</div>
            <div className="text-white p-2">Dashboard</div>
            <div className="text-white p-2 text-sm">interface</div>
            <div className="text-white p-2">Layouts</div>
            <div className="text-white p-2">Pages</div>

         <Link to='/add'><div className="text-white p-2 text-sm">Add</div></Link>

          

          </div>
          <div className=" h-screen w-auto space-y-1">
            <h1 className='text-3xl p-3 font-CNNfONTweight font-CNNfont'>Dashboard</h1>
            <div className="p-1 m-1 border-solid bg-headercolor w-screen"><h1>Dashboard</h1></div>
            <div className='flex text-black space-x-2 p-1 '>
            <div className='w-1/4 bg-blue-600  space-y-2 p-2 text-white'>
                <p>Primary card</p>
                <p className='border-solid border-1 border-black'> view details</p>
                 
            </div>
            <div className='w-1/4  bg-yellow-500  p-2 space-y-2'>
            <p>Warning card</p>
             <p> view details</p>
            </div>
            <div className='w-1/4 bg-green-600  p-2 space-y-2'>
            <p>Success card </p>
             <p> view details</p>
            </div>
            <div className='w-1/4 bg-red-600  p-2 space-y-2'>
            <p>Danger card</p>
             <p> view details</p>
            </div>
            
          </div>
          <div className='flex m-2'>
            <div className='w-1/2'>
            <h1>users table</h1>
            
            <table className="border-collapse border border-gray-800 hover:bg-hovercolor">
  <thead>
    <tr className="hover:bg-hovercolor">
      <th className="bg-gray-800 text-white py-2 px-4 uppercase font-medium text-sm">First Name</th>
      <th className="bg-gray-800 text-white py-2 px-4 uppercase font-medium text-sm">Last Name</th>
      <th className="bg-gray-800 text-white py-2 px-4 uppercase font-medium text-sm">Location</th>
      <th className="bg-gray-800 text-white py-2 px-4 uppercase font-medium text-sm">Phone</th>
    </tr>
  </thead>
  <tbody>
    <tr className="bg-gray-200 hover:bg-hovercolor">
      <td className="border py-2 px-4  ">Niyonkuru</td>
      <td className="border py-2 px-4">mmmmmm</td>
      <td className="border py-2 px-4">Nyarugenge</td>
      <td className="border py-2 px-4">078888888</td>
    </tr>
    <tr className="bg-gray-200">
      <td className="border py-2 px-4">Niyonkuru</td>
      <td className="border py-2 px-4">mmmmmm</td>
      <td className="border py-2 px-4">Nyarugenge</td>
      <td className="border py-2 px-4">078888888</td>
    </tr>
    <tr className="bg-gray-200">
      <td className="border py-2 px-4">Niyonkuru</td>
      <td className="border py-2 px-4">mmmmmm</td>
      <td className="border py-2 px-4">Nyarugenge</td>
      <td className="border py-2 px-4">078888888</td>
    </tr>
    <tr className="bg-gray-200">
      <td className="border py-2 px-4">Niyonkuru</td>
      <td className="border py-2 px-4">mmmmmm</td>
      <td className="border py-2 px-4">Nyarugenge</td>
      <td className="border py-2 px-4">078888888</td>
    </tr>
  </tbody>
</table>

            
            
            </div>
            <div>

            <div className='w-1/2'>
            <h1>data table</h1>
            
            <table className="border-collapse border border-gray-800">
  <thead>
    <tr>
      <th className="bg-gray-800 text-white py-2 px-4 uppercase font-medium text-sm">data collected</th>
      <th className="bg-gray-800 text-white py-2 px-4 uppercase font-medium text-sm">location</th>
      <th className="bg-gray-800 text-white py-2 px-4 uppercase font-medium text-sm">head contact</th>
      <th className="bg-gray-800 text-white py-2 px-4 uppercase font-medium text-sm">item</th>
    </tr>
  </thead>
  <tbody>
    <tr className="bg-gray-200">
      <td className="border py-2 px-4">24000</td>
      <td className="border py-2 px-4">musanze</td>
      <td className="border py-2 px-4">07888888</td>
      <td className="border py-2 px-4">item1</td>
    </tr>
    <tr className="bg-gray-200">
      <td className="border py-2 px-4">30000</td>
      <td className="border py-2 px-4">kigali</td>
      <td className="border py-2 px-4">07888888</td>
      <td className="border py-2 px-4">item2</td>
    </tr>
    <tr className="bg-gray-200">
      <td className="border py-2 px-4">50000</td>
      <td className="border py-2 px-4">kicukiro</td>
      <td className="border py-2 px-4">07888888</td>
      <td className="border py-2 px-4">item3</td>
    </tr>
    <tr className="bg-gray-200">
      <td className="border py-2 px-4">60000</td>
      <td className="border py-2 px-4">nyamata</td>
      <td className="border py-2 px-4">078888888</td>
      <td className="border py-2 px-4">item4</td>
    </tr>
  </tbody>
</table>

            
            
            </div>


            </div>
            </div>
          </div>
          
        </div>
        <div > 
        <Footerbody/>
        </div>
      </div>
    );
  }
}
export default Dashboard;
