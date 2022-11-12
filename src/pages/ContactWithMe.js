import React from "react";
import styled from "styled-components";
import background from "../assests/line_vector_2.svg";

const ContactContainer = styled.div`
  max-width: 100%;
  height: 100vh;
  background: url(${background}) no-repeat;
  background-color: #d3fbe3;
  background-position: -40rem;
  background-size: 90%;

  display: flex;
    justify-content:center;
    align-items:center;
    flex-direction :column;
    gap:1rem;
    

  h1 {
   
    font-size: 5rem;
  }

  p{
    width:60vw;
    text-align:center;
    font-weight:300;
    line-height:1.5;
  }
`;

const ContactGithub = styled.a`
font-size:.8rem;
font-weight:100;

`

const ContactButton = styled.button`

  background-color: #156d39;
  color: #fff;
  border-radius: 5px;
  font-size: 1rem;
  font-weight:100;
  padding:1rem;
  cursor: pointer;
  
`

const ContactWithMe = () => {

  return (
    <ContactContainer className= "slidein" id="contact">
      <h1>Get in touch</h1>
      <p>
        {" "}
        My inbox is always open, no matter if i'm looking for new opportunities
        or not, if you have any questions, you want to chat or simply say hello,
        i will do my best to answer as soon as possible.{" "}
      </p>
      <ContactGithub href="https://github.com/akkasumeyye">
      Design & built by Sumeyye Akkas 
      </ContactGithub>
      <ContactButton> Say Hello!</ContactButton>
    </ContactContainer>
  );
};

export default ContactWithMe;
