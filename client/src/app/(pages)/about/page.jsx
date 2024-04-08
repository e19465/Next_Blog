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
            About Agency
          </LeftTitle>
          <LeftHeader colors={colors} mode={mode}>
            We create digital ideas that are bigger, bolder, brave and better
          </LeftHeader>
          <LeftParagraph colors={colors} mode={mode}>
            We are a pioneering software company, driven by a commitment to
            conceive digital ideas that are bigger, bolder, and braver, ensuring
            our solutions are always better than the rest
          </LeftParagraph>
          <LeftBottom colors={colors} mode={mode}>
            <LeftBottomItem>
              <LeftBottomHeader colors={colors} mode={mode}>
                10 K+
              </LeftBottomHeader>
              <LeftBottomP colors={colors} mode={mode}>
                contributors
              </LeftBottomP>
            </LeftBottomItem>
            <LeftBottomItem>
              <LeftBottomHeader colors={colors} mode={mode}>
                234 K+
              </LeftBottomHeader>
              <LeftBottomP colors={colors} mode={mode}>
                people reached
              </LeftBottomP>
            </LeftBottomItem>
            <LeftBottomItem>
              <LeftBottomHeader colors={colors} mode={mode}>
                5 K+
              </LeftBottomHeader>
              <LeftBottomP colors={colors} mode={mode}>
                services and plugins
              </LeftBottomP>
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
