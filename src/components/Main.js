import React from "react";
import aquwoman from "../assests/zyro-image.png";
import smile from "../assests/emoji_angel.png";
import styled from "styled-components";

import { Link } from "react-scroll";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  height: 100vh;
  background-color: #d3fbe3;
  overflow: hidden;
`;

const MainPhoto = styled.div`
  position: relative;
  width: 100%;
  height: 87vh;
  overflow: hidden;
  margin-top: 8rem;

  svg {
    position: absolute;
    z-index: 1;
  }
  img {
    position: absolute;
    margin-left: 7rem;
    z-index: 2;
    animation-name: fadeInFromCenter;
    animation-duration: 0.9s;
    animation-fill-mode: both;
    animation-timing-function: ease-out;
    animation-delay: 1.2s;
    @keyframes fadeInFromCenter {
      from {
        visibility: hidden;
        opacity: 0;
      }
      to {
        visibility: visible;
        opacity: 1;
      }
    }
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const MainSkills = styled.div`
  position: absolute;
  margin-left: 58rem;
  z-index: 2;
  img {
    margin: 2rem;
    margin-top: 2rem;
    width: 80px;
    background-color: #fff;
    padding: 7px;
    border-radius: 10px;
    box-shadow: 2px 2px 17px -8px #0e0e0e;
    position: relative;

    &:nth-child(1) {
      position: absolute;
      margin-top: 55rem;
      margin-left: 19rem;
      transform: rotate(-30deg);
    }

    &:nth-child(2) {
      position: absolute;
      margin-top: 52rem;
      margin-left: 42rem;
      transform: rotate(30deg);
    }

    &:nth-child(3) {
      position: absolute;
      margin-top: 34rem;
      margin-left: 12rem;
      transform: rotate(20deg);
    }

    &:nth-child(4) {
      position: absolute;
      margin-top: 20rem;
      margin-left: 45rem;
      transform: rotate(-30deg);
    }

    &:nth-child(5) {
      position: absolute;
      margin-top: 10rem;
      margin-left: 17rem;
      transform: rotate(-30deg);
    }
  }
  @media screen and (width<900px) {
    /* display: none; */
    margin:0;
    img{
      width:40px;
      animation-name: fadeInFromCenter;
    animation-duration: 0.9s;
    animation-fill-mode: both;
    animation-timing-function: ease-out;
    animation-delay: 1.8s;
    @keyframes fadeInFromCenter {
      from {
        visibility: hidden;
        opacity: 0;
      }
      to {
        visibility: visible;
        opacity: 1;
      }
    }
      &:nth-child(1){
        position:absolute;
        margin:10vh 40vmin ;
      }
      &:nth-child(2){
        position:absolute;
        margin:10vh auto;
        
      }
      &:nth-child(3){
        position:absolute;
        margin:13vh 80vmin ;
      }
      &:nth-child(4){
        position:absolute;
        margin:65vh 80vmin;
      }
      &:nth-child(5){
        position:absolute;
        margin: 67vh auto;
      }
     
    }
  }
`;

const MainContent = styled.div`
  margin: 15rem 6rem;
  max-width: 100%;

  p {
    animation: slidein 3s;
    color: gray;
  }

  @keyframes slidein {
    0% {
      margin-top: 2rem;
      opacity: 0;
    }
    95% {
      margin-top: 0;
      opacity: 1;
    }
  }
  @media screen and (max-width: 900px) {
   margin-inline:auto;
   margin-top: 30vh;
   p{
    text-align: center;
   }
  }
`;

const Name = styled.h1`
  font-size: calc(1rem + 4vw);
  position: relative;

  @media screen and (max-width: 900px) {
   /* text-align: ${(props)=> 
    props.variant === "bir" ? "center" : "initial"
   }; */
   text-align:center;
  }

  &::after {
    content: " ";
    height: 10px;
    position: absolute;
    width: 10px;
    border: 1px solid transparent;
    border-radius: 10rem;
    background-color: ${(props) =>
      props.variant === "bir" ? "#156d39" : "#0e0e0e"};
    margin-top: 4rem;
    margin-left: 0.5rem;
    @media screen and (max-width: 900px) {
      display: none;
    }
  }
`;

const MainDescription = styled.div`
  display: block;
  position: relative;
  margin-top: 1rem;
  width: max(50%, 50vw);
  color: gray;

  h3 {
    color: #156d39;
  }

  img {
    width: 1.5rem;
  }

  @media screen and (max-width: 900px) {
    padding: 1rem;
    width: 100%;
    text-align: center;
    
  }
`;

const MainLink = styled(Link)`
  display: block;
  margin-top: 2rem;
  width: 11.5vw;
  background-color: #156d39;
  color: #fff;
  border-radius: 5px;
  font-size: 1rem;
  padding: 1.3rem;
  cursor: pointer;

  @media screen and (max-width: 900px) {
    padding: 1rem;
    width: 35vw;
    margin-inline: auto;
  }
`;

const Main = () => {
  return (
    <MainContainer>
      <MainContent>
        <p>Hi! 👋</p>
        <p>my name is</p>
        <Name variant="bir" style={{ color: "#156d39" }}>
          Sümeyye
        </Name>
        <Name>I build web applications</Name>
        <MainDescription>
          I enjoy investing myself inside challenging projects in order to give
          the best digital experience while i keep improving as a developer.{" "}
          <strong>
            <Link to="contact" style={{ color: "#156d39", cursor: "pointer" }}>
              Contact me
            </Link>
          </strong>{" "}
          if you want to talk about opportunities.{" "}
          <img src={smile} alt="smile"></img>
          <MainLink
            activeClass="active"
            offset={-100}
            smooth={true}
            spy={true}
            to="projects"
          >
            Check out my projects!
          </MainLink>
        </MainDescription>
      </MainContent>
      <MainSkills>
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original-wordmark.svg"
          alt="react"
        ></img>
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/redux/redux-original.svg"
          alt="redux"
        ></img>
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/tailwindcss/tailwindcss-plain.svg"
          alt="tailwind"
        ></img>
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/typescript/typescript-original.svg"
          alt="typescript"
        ></img>
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg"
          alt="javascript"
        ></img>
      </MainSkills>
      <MainPhoto>
        <svg
          width="1283"
          height="1035"
          viewBox="0 0 1283 1035"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1161.63 646.197C1161.63 646.197 460.753 387.868 332.625 226.196C204.498 64.5244 438.392 -24.9082 489.009 66.8745C539.625 158.657 816.674 747.817 594.349 847.171C372.024 946.525 71.1909 1144.4 32.6253 847.171C-5.94025 549.945 648.779 175.217 1253 158.657"
            stroke="#5DE1A2"
            stroke-opacity="0.25"
            stroke-width="60"
            stroke-linecap="round"
          />
        </svg>
        <img src={aquwoman} alt="aquawoman" width={800} />
      </MainPhoto>
    </MainContainer>
  );
};

export default Main;
