"use client";

import Image from "next/image";
import styled from "styled-components";
import { xs, xm, m, l, xl, xl_2 } from "@/app/responsive";

/* || STYLED COMPONENTS */
const AboutPageMain = styled.div`
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
  width: 400px;
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
  font-size: 17px;
`;

const LeftHeader = styled.h1`
  margin-top: 20px;
  font-size: 40px;
  font-family: var(--FONT_VARELA_ROUND);
  line-height: 45px;
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
  text-align: justify;
  font-family: var(--FONT_RALEWAY);
  font-size: 15px;
  font-weight: ${(props) => props.mode === "light" && 700};
  color: ${(props) => props.mode === "light" && props.colors.gray[300]};
  margin-top: 20px;
`;

const LeftBottom = styled.div`
  display: flex;
  justify-content: space-between;
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

const LeftBottomItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
  font-size: 15px;
  text-align: center;

  /* RESPONSIVE */
  ${xs({
    flexDirection: "row",
    justifyContent: "space-around",
    padding: "10px 10px",
  })}

  ${l({
    marginRight: "10px",
  })}
`;

const LeftBottomHeader = styled.h2`
  color: ${(props) => props.colors.blueAccent[400]};

  /* RESPONSIVE */
  ${l({
    fontSize: "15px",
  })}

  ${xl({
    fontSize: "15px",
  })}
`;

const LeftBottomP = styled.p`
  font-size: 14px;
  font-weight: ${(props) => props.mode === "light" && 700};
  color: ${(props) => props.mode === "light" && props.colors.gray[300]};

  /* RESPONSIVE */
  ${l({
    fontSize: "15px",
  })}

  ${xl({
    fontSize: "15px",
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

export {
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
};
