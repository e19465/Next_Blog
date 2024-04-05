"use client";

import Image from "next/image";
import styled from "styled-components";
import { xs, xm, m, l, xl, xl_2 } from "./responsive";

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


export {
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
    BottomBrandsImage
  };