import axios from "axios";
import React, { Component } from 'react';
import { Nav, Navbar} from "react-bootstrap";

import './coviddata.css';
import "bootstrap/dist/css/bootstrap.min.css";



export default class Navabar extends Component {
  constructor(props){
      super(props);
  this.state={
       selectedstate:"",
       states:[],
       districts:[],
       selecteddistrict:"",
       data:[],
       statedata:"",
       activecases:[],
       results:""
  }}

  
 
getdata=async ()=>{
   
   this.setState({data:await (await axios.get("https://data.covid19india.org/state_district_wise.json")).data});
 this.setState({states:Object.keys(this.state.data)})
 
    //console.log(this.state.data['Goa']["districtData"]["South Goa"])
}

handleStates=async (e)=>{
  
  await this.setState({selectedstate:e.target.value})
  await this.setState({statedata:this.state.data[this.state.selectedstate]["districtData"]})
//    console.log(this.state.statedata)
  await this.setState({districts:Object.keys(this.state.statedata)});
}


handledistrict=async (e)=>{
await this.setState({selecteddistrict:e.target.value})
// console.log(this.state.statedata[this.state.selecteddistrict])
this.setState({results:this.state.statedata[this.state.selecteddistrict]})
// console.log(this.state.results)

}
componentDidMount(){
  this.getdata()
}
  render() {
     
      return (


        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
             <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="mr-auto"  >
   <div className="action1">
        <div className="bg-primary">
          <form>
          <select name="selectListstate" id="selectListstate" onChange={this.handleStates}>
              <option>select a state</option>
     
       {this.state.states.map((state,index)=>{return <option key ={index} value={state}>{state}</option>})}
</select>
<select name="selectlistdist" id="selectlistdist" onChange={this.handledistrict}>
  <option>select a district</option>
  {this.state.districts.map((district,index)=>{return <option key ={index} value={district}>{district}</option>})}
  </select>
</form>
                  </div>
                  </div>
                  </Nav>
                  </Navbar.Collapse>
                   

<h1>THE DETAILS</h1>
<ul>
<li>active:{this.state.results.active}</li>
<li>confirmed:{this.state.results.confirmed}</li>
<li>migratedother:{this.state.results.migratedother}</li>
<li>deceased:{this.state.results.deceased}</li>
<li>recovered:{this.state.results.recovered}</li>
</ul>

  </Navbar>



      )
      }

}