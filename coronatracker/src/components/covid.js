import React, { useEffect, useState} from 'react';

import './covid.css';

const Covid = () =>{
    const [data, setData] = useState([]);

    const getcovidData = async () => {
        try{
           var res = await fetch("https://data.covid19india.org/state_district_wise.json");
            const actualdata = await res.json();
            // var state='Delhi';
            // console.log(actualdata[`${state}`]);
            // var allstate='State Unassigned'

            console.log(actualdata.Delhi['districtData']['Central Delhi']);
            setData(actualdata.Delhi['districtData']['Central Delhi']);
            } catch(err){
                console.log(err);
            }
        }
            

     useEffect(() => {
         getcovidData();
     }, []);
let selectedOption,  setSelectedOption;
     function Front() {
        const [selectedOption, setSelectedOption] = React.useState("A");
        
        
        
        if (selectedOption === "A") {
          //Do something here (but what so that I can put that value of selectedOption in the Url?)
         
        } else if (selectedOption === "B") {
          //Do something here
        
        } else if (selectedOption === "C"){
            //Do somthing here
         
        }else{

        }
    }
    return (
    <React.Fragment>
        <section>
          <marquee text="head"><h1>LIVE TRACKER</h1></marquee>
           <h1>Corona Tracker</h1>
          
           <select id = "dropdown">
    <option value={selectedOption} onChange={evt => setSelectedOption(evt.target.value)}>Select States</option>
    <option value="1">1</option>
    <option value="2" id={1}>2</option>
    <option value="3" id={2}>3</option>
    <option value="4"id={3}>4</option>
</select>

{/* have to use below or above */}
           <ul>
               <li className='card'>
                   <div className='card_inner'>
                        <p className='card_name'><span>DELHI </span></p>
                     <a href="centraldelhi.html"><p className='card_total card_small1'>Central Delhi</p></a> 
                     <p className='card_total card_small1'>"ACTIVE CASES":{data.active}</p>
                     <p className='card_total card_small1'>"Confirm cases":{data.confirmed}</p>
                     <p className='card_total card_small1'>"Deceased cases":{data.deceased}</p>
                
                     
                   </div>
               </li>
               <li className='card'>
                   <div className='card_inner'>
                        <p className='card_name'><span>OUR </span>COUNTRY</p>
                       <p className='card_total card_small'>India</p>
                   </div>
               </li>

               <li className='card'>
                   <div className='card_inner'>
                        <p className='card_name'><span>OUR </span>COUNTRY</p>
                       <p className='card_total card_small'>India</p>
                   </div>
               </li>
               <li className='card'>
                   <div className='card_inner'>
                        <p className='card_name'><span>OUR </span>COUNTRY</p>
                       <p className='card_total card_small'>India</p>
                   </div>
               </li>
           </ul>
           </section>
        </React.Fragment>
    )
}



export default Covid;