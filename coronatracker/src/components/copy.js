//------------------------------
 {/* <section>
          <marquee text="head"><h1>LIVE TRACKER</h1></marquee>
           <h1>Corona Tracker</h1>
          </section>
<div className='tablayout'>
<div className='tab1'>
                <p className='card_name' href="#"><span>DELHI </span></p>
               <a><p className='card_total card_small1'>Central Delhi</p></a> 
               <p className='card_total card_small1'>"ACTIVE CASES":{data.active}</p>
               <p className='card_total card_small1'>"Confirm cases":{data.confirmed}</p>
               <p className='card_total card_small1'>"Deceased cases":{data.deceased}</p>                 
        
        
</div>

<div className='tab2'>
    
</div>
<div className='tab3'>
    
</div>

<div className='tab4'>
    
</div>

<div className='tab5'>
    
</div>
 */}

//--------------------------------
// let selectedOption,  setSelectedOption;
// function Front() {
//    const [selectedOption, setSelectedOption] = React.useState("1");
   
   
//    if (selectedOption === "1") {
//     <div className='delhi'>
//         console.console.log("hello");
//     </div>
//        <li className='card'>
//               <div className='card_inner'>
//                    <p className='card_name'><span>DELHI </span></p>
//                 <a href="centraldelhi.html"><p className='card_total card_small1'>Central Delhi</p></a> 
//                 <p className='card_total card_small1'>"ACTIVE CASES":{data.active}</p>
//                 <p className='card_total card_small1'>"Confirm cases":{data.confirmed}</p>
//                 <p className='card_total card_small1'>"Deceased cases":{data.deceased}</p>
                
           
//           </li>
    
//    } else if (selectedOption === "2") {

   
//    } else if (selectedOption === "3"){

    
//    }else{

//    }
// }
// -------------------------------------
// <select id = "dropdown">
// <option value={selectedOption} onChange={evt => setSelectedOption(evt.target.value)}>Select States</option>
// <option value="1">DELHI</option>
// <option value="2" id={1}>Arunachal Pradesh</option>
// <option value="3" id={2}>Uttar Pradesh</option>
// <option value="4"id={3}>Karnataka</option>
// <option value="2" id={4}>Maharashtra</option>
// <option value="3" id={5}>Kerala</option>
// <option value="4"id={6}>Tamil Nadu</option>
// <option value="2" id={7}>Punjab</option>
// <option value="3" id={8}>Hariyana</option>
// <option value="4"id={9}>Jammu & Kashmir</option>
// <option value="2" id={10}>uttrakhand</option>
// <option value="3" id={11}>Bihar</option>
// <option value="4"id={12}>Rajasthan</option><option value="2" id={1}>Arunachal Pradesh</option>
// <option value="3" id={13}>Gujrat</option>
// <option value="4"id={14}>Madhya Pradesh</option>
// <option value="2" id={15}>Odisha</option>
// <option value="3" id={16}>Mizoram</option>
// <option value="4"id={17}>Andhra Pradesh</option>
// <option value="2" id={18}>Chhattisgarh</option>
// <option value="3" id={19}>Goa</option>
// <option value="3" id={20}>Assam</option>
// <option value="3" id={21}>Jharkhand</option>
// <option value="3" id={22}>Himachal Pradesh</option>
// <option value="3" id={23}>Manipur</option>
// <option value="3" id={24}>Nagaland</option>
// <option value="4"id={25}>Sikkim</option>
// <option value="4"id={26}>Telengana</option>
// <option value="4"id={27}>West Bengal</option>



// </select>

// {/* have to use below or above */}
//        <ul>
//            <li className='card'>
//                <div className='card_inner'>
//                     <p className='card_name'><span>DELHI </span></p>
//                  <a href=""><p className='card_total card_small1'>Central Delhi</p></a> 
//                  <p className='card_total card_small1'>"ACTIVE CASES":{data.active}</p>
//                  <p className='card_total card_small1'>"Confirm cases":{data.confirmed}</p>
//                  <p className='card_total card_small1'>"Deceased cases":{data.deceased}</p>
            
                 
//                </div>
//            </li>
//            <li className='card'>
//                <div className='card_inner'>
//                     <p className='card_name'><span>OUR </span>COUNTRY</p>
//                    <p className='card_total card_small'>India</p>
//                </div>
//            </li>

//            <li className='card'>
//                <div className='card_inner'>
//                     <p className='card_name'><span>OUR </span>COUNTRY</p>
//                    <p className='card_total card_small'>India</p>
//                </div>
//            </li>
//            <li className='card'>
//                <div className='card_inner'>
//                     <p className='card_name'><span>OUR </span>COUNTRY</p>
//                    <p className='card_total card_small'>India</p>
//                </div>
//            </li>
//        </ul>
//        </section>

//------------------------------------------------------
              //updated

            //   import React, { useEffect, useState} from 'react';
            //   import { Nav, Navbar, NavDropdown } from "react-bootstrap";
            //   import "bootstrap/dist/css/bootstrap.min.css";
            //   import { ReactComponent as Logo } from "../logo.svg";
            //   // import {Link} from 'react-router-dom';
            //   // import DropdownButton from 'react-bootstrap/DropdownButton';
            //   // import Dropdown from 'react-bootstrap/Dropdown'
            //   import './coviddata.css';
            //   import { getDropdownMenuPlacement } from 'react-bootstrap/esm/DropdownMenu';
              
            //   const Coviddata = () =>{
              
            //     const [data, setData] = useState([]);
            //     const [chartData, setChartData]= useState([]);
            //     const [districtData, setdistrictdata]= useState([]);
            //    const [places, setplaces]= useState([]);const GetcovidData = async () => {
              
            //           try{
            //              var res = await fetch("https://data.covid19india.org/state_district_wise.json");
            //               var actualdata = await res.json();
                         
            //               console.log(actualdata.Delhi['districtData']['East Delhi']);
            //               setData(actualdata.Delhi['districtData']['East Delhi']);
            //               } catch(err){
            //                   console.log(err);
              
            //               }
            //               for(const dataObj of res.data.data){
            //                 districtDataa.push(parse)
            //               }
                       
              
            //           setChartData({
            //             labels:["north Delhi","South Delhi", "East Delhi"],
            //             datasets:[
            //               {
            //               label:"level of thiccness",
            //               data:[23,33,44,55,77],
            //               backgroundcolor:blue,
            //               borderwidth:4
            //             }
            //             ]
            //           });
            //        useEffect(() => {
            //            GetcovidData();
            //        },[]);
            //       }
                
            //       return (
                    
            //           <React.Fragment>
              
            //                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            //         <Navbar.Brand href="#home">
            //           <Logo
            //             alt=""
            //             width="30"
            //             height="30"
            //             className="d-inline-block align-top"
            //           />
            //           CORONA TRACKER
            //         </Navbar.Brand>
            //         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            //         <Navbar.Collapse id="responsive-navbar-nav">
            //           <Nav className="mr-auto"  >
            //             <Nav.Link href="#features">INDIA</Nav.Link>
            //             <NavDropdown title="Union Territories" className='drop1' id="collasible-nav-dropdown">
              
            //             <NavDropdown.Item href="action1">Andaman and Nicobar Islands</NavDropdown.Item>
            //               <NavDropdown.Item href="action2">Dadra and Nagar Haveli and Daman and Diu</NavDropdown.Item>
            //               <NavDropdown.Item href="action3">Chandigarh</NavDropdown.Item>
            //               <NavDropdown.Item href="action4">Lakshadweep</NavDropdown.Item>
            //               <NavDropdown.Item href="action5">Puducherry</NavDropdown.Item>
            //               <NavDropdown.Item href="action6">Ladakh</NavDropdown.Item>
                      
            //               <NavDropdown.Item href="action8">Jammu and Kashmir</NavDropdown.Item>
            //             </NavDropdown>
            //             <NavDropdown title="Select States" className='drop2' id="collasible-nav-dropdown"   >
            //               <NavDropdown.Item href="action20">Andhra Pradesh</NavDropdown.Item>
            //               <p></p>
            //               <NavDropdown.Item href="action9">Arunachal Pradesh</NavDropdown.Item>
            //               <NavDropdown.Item href="action10">Assam</NavDropdown.Item>
            //               <NavDropdown.Item href="action11">Bihar</NavDropdown.Item>
            //               <NavDropdown.Item href="action12">Chandigarh</NavDropdown.Item>
            //               <NavDropdown.Item href="action13">Chhattisgarh</NavDropdown.Item>
            //               <NavDropdown.Item href="action14">Delhi</NavDropdown.Item>
            //               <NavDropdown.Item href="action14">Goa</NavDropdown.Item>
            //               <NavDropdown.Item href="action16">Gujarat</NavDropdown.Item>
            //               <NavDropdown.Item href="action17">Himachal Pradesh</NavDropdown.Item>
            //               <NavDropdown.Item href="action18">Haryana</NavDropdown.Item>
            //               <NavDropdown.Item href="action19">Jharkhand</NavDropdown.Item>
            //               <NavDropdown.Item href="action21">Jammu and Kashmir</NavDropdown.Item>
            //               <NavDropdown.Item href="action22">Karnataka</NavDropdown.Item>
            //               <NavDropdown.Item href="action23">Kerala</NavDropdown.Item>
            //               <NavDropdown.Item href="action24">Maharashtra</NavDropdown.Item>
            //               <NavDropdown.Item href="action25">Meghalaya</NavDropdown.Item>
            //               <NavDropdown.Item href="action26">Manipur</NavDropdown.Item>
            //               <NavDropdown.Item href="action27">Madhya Pradesh</NavDropdown.Item>
            //               <NavDropdown.Item href="action28">Mizoram</NavDropdown.Item>
            //               <NavDropdown.Item href="action29">Nagaland</NavDropdown.Item>
            //               <NavDropdown.Item href="action30">Odisha</NavDropdown.Item>
            //               <NavDropdown.Item href="action31">Punjab</NavDropdown.Item>
            //               <NavDropdown.Item href="action32">Rajasthan</NavDropdown.Item>
            //               <NavDropdown.Item href="action33">Sikkim</NavDropdown.Item>
            //               <NavDropdown.Item href="action34">Telangana</NavDropdown.Item>
            //               <NavDropdown.Item href="action35">Tamil Nadu</NavDropdown.Item>
            //               <NavDropdown.Item href="action36">Tripura</NavDropdown.Item>
            //               <NavDropdown.Item href="action37">Uttar Pradesh</NavDropdown.Item>
            //               <NavDropdown.Item href="action38">Uttarakhand</NavDropdown.Item>
            //               <NavDropdown.Item href="action39">West Bengal</NavDropdown.Item>
                
            //               <NavDropdown.Divider />
            //               {/* <NavDropdown.Item href="#action/3.4">
            //                 Separated link
            //               </NavDropdown.Item> */}
            //             </NavDropdown>
            //           </Nav>
            //           <Nav>
            //             <Nav.Link href="#deets">LIVE</Nav.Link>
            //             <div>
            //             <span>
            //               <img class="liveicon" height="20px" alt="liveicon" src="../liveicon.jpg"></img>
            //               </span>
            //               </div>
            //             <Nav.Link eventKey={2} href="#memes">
            //               SELECT COUNTRY
            //             </Nav.Link>
            //           </Nav>
            //         </Navbar.Collapse>
            //       </Navbar>
                  
            //                   <div className='tab1'>
            //                   <p className='card_name' href="#"><span>DELHI </span></p>
            //                  <a><p className='card_total card_small1'>Central Delhi</p></a> 
            //                  <p className='card_total card_small1'>"ACTIVE CASES":{data.active}</p>
            //                  <p className='card_total card_small1'>"Confirm cases":{data.confirmed}</p>
            //                  <p className='card_total card_small1'>"Deceased cases":{data.deceased}</p>                 
              
            //   </div>
              
              
            //           </React.Fragment>
            //       )
            //   }
              
              
              
            //   export default Coviddata;




//--------------------------------------------------------