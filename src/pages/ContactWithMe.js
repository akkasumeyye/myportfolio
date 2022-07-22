import React from "react";
import styled from "styled-components";
import background from "../assests/line_vector_2.svg";

const ContactContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${background}) no-repeat;
  background-color: #d3fbe3;
  background-position: -40rem;
  background-size: 90%;

  h1 {
    margin-top:40vh;
    margin-left:43vw;
    position: absolute;
    font-size:5rem;
  }

  p{
    position: absolute;
    margin-left:40vw;
    margin-top:50vh;
    width:65vh;
    font-weight:100;
    font-size:0.9rem;
    line-height:1.5;
  }
`;

const ContactGithub = styled.a`
font-size:.8rem;
margin-top:95vh;
position:absolute;
font-weight:100;
margin-left:50%;
`

const ContactButton = styled.button`
position:absolute;
  background-color: #156d39;
  color: #fff;
  border-radius: 5px;
  font-size: 1rem;
  font-weight:100;
  padding:1rem;
  cursor: pointer;
  margin-top: 57vh;
  margin-left: 52vw;
`

const ContactWithMe = () => {
  return (
    <ContactContainer id="contact">
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
