"use client";

import Image from "next/image";
import styled from "styled-components";
import { useTheme } from "@mui/material";
import { tokens } from "./theme";
import { xs, xm, m, l, xl, xl_2 } from "./responsive";
import Link from "next/link";
import HomeImage from "../../public/assests/hero.gif";
import HomeLightImage from "../../public/assests/hero2.gif";
import LogoImage from "../../public/assests/brands.png";

/* || STYLED COMPONENTS */
const HomePageMain = styled.div`
  background-color: ${(props) =>
    props.mode === "dark" ? props.colors.primary[600] : "#fff"};
  height: 100%;
  display: flex;
  overflow: auto;

  /* RESPONSIVE */
  ${xs({
    flexDirection: "column-reverse",
  })}

  ${xm({
    flexDirection: "column-reverse",
  })}
  
  ${m({
    flexDirection: "column-reverse",
    overflow: "auto",
  })}
  
  ${l({
    marginTop: "20px",
  })}
`;

const StyledImage = styled(Image)`
  width: 500px;
  height: auto;

  /* RESPONSIVE */
  ${xs({
    width: "250px",
  })}

  ${l({
    width: "300px",
  })}
  
  ${xl({
    width: "350px",
  })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftContent = styled.div`
  width: 70%;
  min-height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* RESPONSIVE */
  ${m({
    width: "100%",
    padding: "10px 20px",
  })}

  ${l({
    width: "100%",
    padding: "20px",
  })}
`;

const LeftTitle = styled.h3`
  text-align: left;
  width: 100%;
  color: ${(props) => props.colors.blueAccent[400]};
  font-size: 20px;
`;

const LeftHeader = styled.h1`
  margin-top: 20px;
  font-size: 60px;
  font-family: var(--FONT_VARELA_ROUND);
  line-height: 65px;
  color: ${(props) => props.mode === "light" && props.colors.blueAccent[200]};

  /* RESPONSIVE */
  ${m({
    fontSize: "30px",
    lineHeight: "35px",
  })}

  ${l({
    fontSize: "30px",
    lineHeight: "35px",
  })}
  
  ${xl({
    fontSize: "30px",
    lineHeight: "35px",
  })}
`;

const LeftParagraph = styled.p`
  font-family: var(--FONT_RALEWAY);
  font-size: 17px;
  font-weight: ${(props) => props.mode === "light" && 700};
  color: ${(props) => props.mode === "light" && props.colors.gray[300]};
  margin-top: 10px;
`;

const LeftBottom = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-top: 20px;
  background-color: ${(props) =>
    props.mode === "dark" ? props.colors.primary[600] : "#fff"};

  /* RESPONSIVE */

  ${xs({
    flexDirection: "column",
    justifyContent: "center",
    padding: "10px 10px",
  })}

  ${m({
    padding: "20px",
  })}

  ${l({
    alignItems: "center",
    textAlign: "center",
    marginRight: "20px",
    marginTop: "10px",
  })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;

  /* RESPONSIVE */
  ${m({
    justifyContent: "center",
    padding: "10px",
  })}

  ${xl({
    justifyContent: "center",
    padding: "10px",
  })}
`;

const StyledButton = styled.button`
  margin-right: 20px;
  width: 180px;
  font-size: 20px;
  padding: 20px;
  border: none;
  outline: none;
  cursor: pointer;
  letter-spacing: 1px;
  border-radius: 5px;
  font-weight: 500;
  transition: all 0.5s;
  color: ${(props) =>
    props.mode === "dark" ? props.colors.primary[900] : "#fff"};
  background-color: ${(props) =>
    props.title === "learn"
      ? props.colors.blueAccent[400]
      : props.colors.gray[200]};

  &:hover {
    filter: ${(props) =>
      props.mode === "dark" ? "brightness(1.4)" : "brightness(1.4)"};
  }

  /* RESPONSIVE */
  ${xs({
    width: "180px",
    fontSize: "15px",
    padding: "10px",
    marginBottom: "10px",
  })}
  ${m({
    width: "180px",
    fontSize: "15px",
    padding: "10px",
  })}
`;

const BottomImageContainer = styled.div`
  width: 100%;
  height: 50px;
  overflow: hidden;
  margin-top: 40px;
`;

const BottomBrandsImage = styled(Image)`
  height: 100%;
  width: 100%;
`;

/* || END STYLED COMPONENTS */

//////////////////////////////////////////////////////////////////////////////
const Home = () => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const colors = tokens(mode);

  /////////////////////////////////////////////////////////////////////////////
  return (
    <HomePageMain colors={colors} mode={mode}>
      <Left>
        <LeftContent>
          <LeftTitle colors={colors} mode={mode}>
            What we do?
          </LeftTitle>
          <LeftHeader colors={colors} mode={mode}>
            Dare to dream, create & innovate.
          </LeftHeader>
          <LeftParagraph colors={colors} mode={mode}>
            We offer innovative solutions tailored to your needs. Our designs
            combine aesthetic appeal with functionality, ensuring user-friendly
            experiences that captivate audiences and drive results
          </LeftParagraph>
          <LeftBottom colors={colors} mode={mode}>
            <StyledButton title="learn" colors={colors} mode={mode}>
              learn more
            </StyledButton>
            <Link href={"/contact"}>
              <StyledButton title="contact" colors={colors} mode={mode}>
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
          height={400}
          loading="lazy"
        />
      </Right>
    </HomePageMain>
  );
};

export default Home;
