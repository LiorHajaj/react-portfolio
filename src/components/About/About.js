import React from "react";
import { stackList } from "../../data/ProjectData";
import avatar from "../../Assets/avataaars.png"
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src={avatar}
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hi! My name is <strong>Lior Hajaj</strong> I'm Fullstack developer I'm a 3rd year Bsc computer science student, I'm on a journey to learn and develop, using a variety of technological stacks, I have created different project for both my degree and out of self interest, I seek to join the industry in order to gain expiriance and learn from people, i'm highly passionate about Programming and for this reason I believe that I can overcome almost every issue that might arrise,

          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
