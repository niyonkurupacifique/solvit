import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      data:[],
      loading:true,
      searchQerry:''
    }
  }
  
   async componentDidMount(){
    const result=await fetch("https://api.openweathermap.org/data/2.5/forecast?q=kigali&appid=1383c1ef39cccbbc106d269850cfc481")
    const mydata=await result.json()
    this.setState({data:mydata.list,loading:false})
   }

   search=(event)=>{
const searchQerry= event.target.value
console.log(searchQerry)
console.log(this.state)
this.setState({searchQerry});
}
   

  
  render() {
    let filteredList=null
    filteredList= this.state.data.filter((filterData)=>(
      filterData.weather[0].main.toLowerCase().includes(this.state.searchQerry.toLowerCase())
    ))

    let displayContent=null
    if(this.state.loading)
    {
      displayContent=<div>
        <h1>loading..........</h1>
      </div>
    }
    else if(filteredList.length>0)
    {
    displayContent=  
      (
      <div>
        
        {filteredList.map((mydata)=>(
      <h1>{mydata.weather[0].main}</h1>
      
      
        ))}
      </div>
      )
    }
    else{
      displayContent=<div>
        <p style={{color:"red"}}>no result found</p>
      </div>
    }
    return (
    
    
      <div className="App">
        <input type placeholder='search..........' onChange={this.search} className="myinput"></input><br/>
        
     <div className='divone'><p>{displayContent}</p></div>
      </div>
    );
     }
  }


export default App;
