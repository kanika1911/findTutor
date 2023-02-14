import React,{useContext,useState} from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import {islogin }from '../App' 
import { useNavigate } from 'react-router-dom';
import { LoginContext } from './LoginProvider';




function Navbar_main() {

  // const {isLoggedIn,type}=React.useContext(LoginContext)
  const[name,setName]=useState("")
  const[types,setType]=useState("")

  // const isdone=useContext(islogin);
  // const [islogdin,setlogin]=React.useState(false);
  const navigate=useNavigate();
  let data;
  let type;
  React.useEffect(() => {
    data=JSON.parse(localStorage.getItem('user_data'));
    if(data!==null)
    setName(data.name);
    type=JSON.parse(localStorage.getItem('type'));
    console.log(type)
    if(type!=="")
    setType(type)
  }, [])
  
  console.log(type);
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
    <Container fluid>
      <Navbar.Brand href="/">Alphatech</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
      <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
        </Nav>
        {
          (name!=="")?(  
           <a href={types=="student"?`/Student_dashboard/${name.replace(' ','-')}`:`/Tutor_dashboard/${name.replace(' ','-')}`}>
            <img src={require("../image/user-log.png")}/>
            </a>
           
          ):(
            <>
            <a href="/Login"><Button variant="primary" className="m-1">Login</Button></a>
           <a href="/Singup"><Button variant="primary" className="m-1">Sign in</Button></a>
            </>
          )
        }
        
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navbar_main