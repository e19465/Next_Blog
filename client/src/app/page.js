"use client";

import { useTheme } from "@mui/material";
import { tokens } from "./theme";
import Link from "next/link";
import HomeImage from "../../public/assests/hero.gif";
import HomeLightImage from "../../public/assests/hero2.gif";
import LogoImage from "../../public/assests/brands.png";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
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
  BottomImageContainer,
  BottomBrandsImage,
} from "./styled";
import { useSelector } from "react-redux";

/* || END STYLED COMPONENTS */

//////////////////////////////////////////////////////////////////////////////
const Home = () => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const colors = tokens(mode);
  const router = useRouter();
  const { user } = useSelector((store) => store.user);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  /////////////////////////////////////////////////////////////////////////////
  return (
    <HomePageMain $colors={colors} $mode={mode}>
      <Left>
        <LeftContent>
          <LeftTitle $colors={colors} $mode={mode}>
            What we do?
          </LeftTitle>
          <LeftHeader $colors={colors} $mode={mode}>
            Dare to dream, create & innovate.
          </LeftHeader>
          <LeftParagraph $colors={colors} $mode={mode}>
            We offer innovative solutions tailored to your needs. Our designs
            combine aesthetic appeal with functionality, ensuring user-friendly
            experiences that captivate audiences and drive results
          </LeftParagraph>
          <LeftBottom $colors={colors} $mode={mode}>
            <StyledButton title="learn" $colors={colors} $mode={mode}>
              learn more
            </StyledButton>
            <Link href={"/contact"}>
              <StyledButton title="contact" $colors={colors} $mode={mode}>
                contact
              </StyledButton>
            </Link>
          </LeftBottom>
          <BottomImageContainer>
            <BottomBrandsImage
              src={LogoImage}
              alt="social logos"
              loading="lazy"
            />
          </BottomImageContainer>
        </LeftContent>
      </Left>
      <Right>
        <StyledImage
          src={mode === "dark" ? HomeImage : HomeLightImage}
          alt="home page image"
          width={400}
          height="auto"
          priority
        />
      </Right>
    </HomePageMain>
  );
};

export default Home;
