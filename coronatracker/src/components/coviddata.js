import React, { useEffect, useState} from 'react';

import './coviddata.css';

const Coviddata = () =>{
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



    return (
        <React.Fragment>

{/* <div style={{
      backgroundImage:`url(${require("../components/wallpaper1.jpeg").default})`
      
    }}> */}
        {/* </div> */}
        
        <section>
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





</div>





       
        </React.Fragment>
    )
}



export default Coviddata;