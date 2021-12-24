import React, { useEffect, useState} from 'react';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ReactComponent as Logo } from "../logo.svg";


import './coviddata.css';

const Coviddata = () =>{
    const [data, setData] = useState([]);

    const getcovidData = async () => {
        try{
           var res = await fetch("https://data.covid19india.org/state_district_wise.json");
            const actualdata = await res.json();
    
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
      
             <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
         

        <Logo
          alt=""
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        CORONA TRACKER
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">INDIA</Nav.Link>
          <NavDropdown title="union territories" className='drop1' id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1"> Andaman and Nicobar Islands</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2"> Dadra and Nagar Haveli and Daman and Diu</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1"> Chandigarh</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2"> Lakshadweep</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Puducherry</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Ladakh</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Delhi</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Jammu and Kashmir</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Select States" className='drop2' id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Andhra Pradesh</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Arunachal Pradesh</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Assam</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Bihar</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Chandigarh</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Chhattisgarh</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Delhi</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Goa</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Gujarat</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Himachal Pradesh</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Haryana</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Jharkhand</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Jammu and Kashmir</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Karnataka</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Kerala</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Maharashtra</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Meghalaya</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Manipur</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Madhya Pradesh</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Mizoram</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Nagaland</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Odisha</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Punjab</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Rajasthan</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Sikkim</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Telangana</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Tamil Nadu</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Tripura</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Uttar Pradesh</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Uttarakhand</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">West Bengal</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            {/* <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item> */}
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">LIVE</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            SELECT COUNTRY
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
       





        </React.Fragment>
    )
}



export default Coviddata;