"use client";

import { useTheme } from "@mui/material";
import { tokens } from "./theme";
import Link from "next/link";
import HomeImage from "../../public/assests/hero.gif";
import HomeLightImage from "../../public/assests/hero2.gif";
import LogoImage from "../../public/assests/brands.png";
// import { useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { redirect } from "next/navigation";
import {
  HomePageMain,
  StyledImage,
  Left,
  LeftContent,
  LeftTitle,
  LeftHeader,
  LeftParagraph,
  LeftBottom,
  Right,
  StyledButton,
  // BottomImageContainer,
  // BottomBrandsImage,
} from "./styled";
import Social from "@/components/social/Social";

/* || END STYLED COMPONENTS */

//////////////////////////////////////////////////////////////////////////////
const Home = () => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const colors = tokens(mode);

  /////////////////////////////////////////////////////////////////////////////
  return (
    <HomePageMain $colors={colors} $mode={mode}>
      <Left>
        <LeftContent>
          <LeftTitle $colors={colors} $mode={mode}>
            Why me?
          </LeftTitle>
          <LeftHeader $colors={colors} $mode={mode}>
            Dare to dream, create & innovate.
          </LeftHeader>
          <LeftParagraph $colors={colors} $mode={mode}>
            I can build innovative solutions tailored to your needs. My designs
            combine aesthetic appeal with functionality, ensuring user-friendly
            experiences that captivate audiences and drive results
          </LeftParagraph>
          <LeftBottom $colors={colors} $mode={mode}>
            {/* <StyledButton title="learn" $colors={colors} $mode={mode}>
              learn more
            </StyledButton> */}
            <Link href={"/contact"}>
              <StyledButton title="contact" $colors={colors} $mode={mode}>
                contact
              </StyledButton>
            </Link>
          </LeftBottom>
          <Social />
        </LeftContent>
      </Left>
      <Right>
        <StyledImage
          src={mode === "dark" ? HomeImage : HomeLightImage}
          alt="home page image"
          width={400}
          height="auto"
          priority
          unoptimized
        />
      </Right>
    </HomePageMain>
  );
};

export default Home;
