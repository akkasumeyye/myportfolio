import React , {useState} from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import logo from "../assests/SA.png";


const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  position: fixed;
  width: 100%;
  z-index: 10;
  background-color: #d3fbe3;
  height: 5rem;
  animation-duration: 0.5s;
  animation-name: slideInFromTop;
  animation-timing-function: ease-out;
  animation-fill-mode: both;
  animation-delay: 1.1s;
  transition: box-shadow 0.6s, background-color 0.2s;

  @keyframes slideInFromTop {
    from {
      top: -4rem;
      opacity: 0;
      visibility: hidden;
    }
    to {
      top: 0;
      opacity: 1;
      visibility: visible;
    }
  }
`;

const NavLink = styled(Link)`
  color: initial;
  font-size: inherit;
  margin-left: 2rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;


const Navbar = () => {

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);
 
  return (
    <Nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
      <NavLink activeClass="active" smooth={true} spy={true} to="home">
      <img src={logo} alt="logo" width="80" height="80"></img>
      </NavLink>
      <div>
        <NavLink activeClass="active" smooth={true} spy={true} offset={-120} to="projects">Projects</NavLink>
        <NavLink activeClass="active" smooth={true} spy={true} to="contact">Contact </NavLink>
      </div>
    </Nav>
  );
};

export default Navbar;
