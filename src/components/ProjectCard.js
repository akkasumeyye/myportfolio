import React from "react";
import styled from "styled-components";

import {AiFillGithub , AiOutlineLink} from "react-icons/ai"


const SingleCard = styled.div`
  width: 20vw;
  height: 40vh;
  color:#fff;
  display: flex;
  flex-direction: column;
  background-color: #156d39;
  border-radius: 1rem;
  padding:3rem;

  &:hover {
    transform: translateY(-5%);
    box-shadow: 11px 11px 30px 3px rgba(0,0,0,0.36);
  }

h4{
  color: #b2ffff;
}

  p{
    font-weight: 200;

    :nth-child(3) {
      font-size:.8rem;
    }
  }

  div{
    margin-top: 22vh;
    margin-left: 2vw;
    position:absolute
  }
`;

const ProjectCard = ({name, desc , tech, github ,page}) => {
  return (
    <SingleCard>
    <h4>{name}</h4>
    <p>{desc}</p>
    <p>Technologies : {tech.join(", ")}</p>
    <div>
     <a href={github} rel="noreferrer" target="_blank">
     <AiFillGithub color={"white"} fontSize="3.5rem"/>
     </a>
     <a href={page} rel="noreferrer" target="_blank">
     <AiOutlineLink color={"white"} fontSize="3.5rem"/>
     </a>
    </div>
    </SingleCard>
  )  
};

export default ProjectCard;
