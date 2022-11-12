import React from "react";
import styled from "styled-components";
import ProjectCard from "../components/ProjectCard";

import projects from "../utils/data.js";

const ProjectsContent = styled.div`
  min-height: 100vh;
  margin-top: 4rem;

  h1 {
    margin:2rem;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    flex-basis: 300px;
    justify-content: center;
    gap: 2rem;
    padding: 1.5rem;
   
  }
`;

const Projects = () => {
  return (
    <ProjectsContent id="projects">
      <h1>Something i have built</h1>
      <div>
        {projects.map((project) => {
          const { name, desc, tech, github, page, index } = project;
          return (
            <ProjectCard
              name={name}
              desc={desc}
              tech={tech}
              github={github}
              page={page}
              index={index}
            />
          );
        })}
      </div>
    </ProjectsContent>
  );
};

export default Projects;
