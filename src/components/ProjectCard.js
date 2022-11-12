import React from "react";
import styled from "styled-components";

import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

const SingleCard = styled.div`
  color: #fff;
  width: 20vw;
  min-height: 40vh;
  background-color: #156d39;
  padding: 3rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: translateY(-5%);
    box-shadow: 11px 11px 30px 3px rgba(0, 0, 0, 0.36);
  }


  h4 {
    color: #b2ffff;
  }

  p {
    font-weight: 200;
    :nth-child(3) {
      font-size: 0.9rem;
    }
  
  }
`;

const ProjectCard = ({ name, desc, tech, github, page }) => {
  return (
    <SingleCard>
      <h4>{name}</h4>
      <p>{desc}</p>
      <p>Technologies : {tech.join(", ")}</p>
      <div>
        <a href={github} rel="noreferrer" target="_blank">
          <AiFillGithub color={"white"} fontSize="3rem" />
        </a>
        <a href={page} rel="noreferrer" target="_blank">
          <AiOutlineLink color={"white"} fontSize="3rem" />
        </a>
      </div>
    </SingleCard>
  );
};

export default ProjectCard;
