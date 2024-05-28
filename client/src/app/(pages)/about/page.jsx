"use client";
import { useTheme } from "@mui/material";
import { tokens } from "@/app/theme";
import AboutImage from "../../../../public/assests/about.png";

import {
  AboutPageMain,
  StyledImage,
  Left,
  LeftContent,
  LeftTitle,
  LeftHeader,
  LeftParagraph,
  LeftBottom,
  LeftBottomItem,
  LeftBottomHeader,
  LeftBottomP,
  Right,
} from "./styled";
import Social from "@/components/social/Social";

//////////////////////////////////////////////////////////////////////////////
const About = () => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const colors = tokens(mode);

  /////////////////////////////////////////////////////////////////////////////
  return (
    <AboutPageMain colors={colors} mode={mode}>
      <Left>
        <LeftContent>
          <LeftTitle colors={colors} mode={mode}>
            Hello👋 I&apos;m Sasindu
          </LeftTitle>
          <LeftHeader colors={colors} mode={mode}>
            I build digital ideas that are bigger, bolder, brave and better
          </LeftHeader>
          <LeftParagraph colors={colors} mode={mode}>
            I am a Computer Engineer with a passion for innovative technology
            solutions. I specialize in web application development, utilizing C,
            Java, Python, C++, HTML, CSS, JavaScript, and frameworks like
            React.js, Next.js, Django, Node.js, Express.js, FastAPI, and Django
            Rest Framework. I have hands-on experience with Arduino for hardware
            design and AWS for cloud computing. Proficient in MySQL, MongoDB,
            and PostgreSQL, I am a quick learner, constantly seeking to adopt
            new technologies to enhance my skills and make impactful
            contributions in the field of computer engineering.
          </LeftParagraph>
          <LeftBottom colors={colors} mode={mode}>
            <LeftBottomItem>
              <Social />
            </LeftBottomItem>
          </LeftBottom>
        </LeftContent>
      </Left>
      <Right>
        <StyledImage
          src={AboutImage}
          alt="about page image"
          width={400}
          height={400}
          loading="lazy"
        />
      </Right>
    </AboutPageMain>
  );
};

export default About;
