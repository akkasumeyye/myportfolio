import React from "react";
import styled from "styled-components";


const SingleCard = styled.div`
  width: 20vw;
  height: 40vh;
  color:#fff;
  display: flex;
  flex-direction: column;
  background-color: #156d39;
  border-radius: 1rem;
  &:hover {
    transform: translateY(-5%);
    box-shadow: 11px 11px 30px 3px rgba(0,0,0,0.36);
  }

  h3{
    margin-top:2rem;
    margin-left:5vw;
  }

  p{
    font-weight: 200;
  }
`;

const ProjectCard = ({name, desc , tech, github ,page}) => {
  return (
    <SingleCard>
    <h3>{name}</h3>
    <p>{desc}</p>
    <p>{tech.join(", ")}</p>
     <a href={github} rel="noreferrer" target="_blank">
     <i className="fab fa-github icon fa-2x"></i>
     </a>
     <a href={page} rel="noreferrer" target="_blank">
     <i className="fas fa-link icon fa-2x"></i>
     </a>
    </SingleCard>
  )  
};

export default ProjectCard;
