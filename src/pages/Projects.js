import React from "react";
import styled from "styled-components";
import ProjectCard from "../components/ProjectCard";

import projects from '../utils/data.js';

const ProjectsContent = styled.div`
  width:100%;
  height: 100vh;
  margin-top: 8rem;
  margin-left: 10rem;
  div{
    margin-top: 2rem;
    display: flex;
    width:80%;
    gap:2rem;
  }
`;

const Projects = () => {
  return (
    <ProjectsContent id="projects">
      <h1>Something i have built</h1>
      <div>
  {
    projects.map(project => {
      const {name, desc, tech , github, page, index} = project;
      return <ProjectCard name={name} desc={desc} tech={tech} github={github} page={page} index={index} />
    })
  }
      </div>

      
    </ProjectsContent>
  );
};

export default Projects;
