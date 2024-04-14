"use client";

import Image from "next/image";
import styled from "styled-components";
import { xs, xm, m, l, xl, xl_2 } from "@/app/responsive";

/* || STYLED COMPONENTS */
const ContactPageMain = styled.div`
  background-color: ${(props) =>
    props.mode === "dark" ? props.colors.primary[600] : "#fff"};
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
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
  height: 80%;
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

const StyledForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 10%;
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 5px;
  letter-spacing: 1px;
  font-size: 15px;
  font-family: var(--FONT_RALEWAY);
  background-color: ${(props) =>
    props.mode === "dark"
      ? props.colors.primary[400]
      : props.colors.primary[600]};
  color: ${(props) =>
    props.mode === "dark" ? props.colors.gray[100] : props.colors.gray[900]};

  &::placeholder {
    color: ${(props) =>
      props.mode === "dark" ? props.colors.gray[100] : props.colors.gray[900]};
    font-family: var(--FONT_RALEWAY);
    font-size: 12px;
  }

  &:focus {
    outline: 2px solid
      ${(props) =>
        props.mode === "dark"
          ? props.colors.greenAccent[500]
          : props.colors.primary[600]};
  }
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 40%;
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 15px;
  font-family: var(--FONT_RALEWAY);
  resize: none;
  background-color: ${(props) =>
    props.mode === "dark"
      ? props.colors.primary[400]
      : props.colors.primary[600]};
  color: ${(props) =>
    props.mode === "dark" ? props.colors.gray[100] : props.colors.gray[900]};

  &::placeholder {
    color: ${(props) =>
      props.mode === "dark" ? props.colors.gray[100] : props.colors.gray[900]};
    font-family: var(--FONT_RALEWAY);
    font-size: 12px;
  }

  &:focus {
    outline: 2px solid
      ${(props) =>
        props.mode === "dark"
          ? props.colors.greenAccent[500]
          : props.colors.primary[600]};
  }
`;

const StyledButton = styled.button`
  width: 100%;
  height: 10%;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  /* font-weight: 400; */
  padding: 10px;
  display: flex;
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
  /* font-weight: bold; */
  color: ${(props) =>
    props.mode === "dark" ? "#fff" : props.colors.gray[900]};
  font-size: 14px;
  letter-spacing: 1px;
  background-color: ${(props) =>
    props.mode === "dark" ? "dodgerblue" : props.colors.blueAccent[400]};
  transition: all 0.5s;
  &:hover {
    background-color: ${(props) =>
      props.mode === "dark"
        ? props.colors.blueAccent[700]
        : props.colors.blueAccent[200]};
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;

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
  ContactPageMain,
  StyledImage,
  Left,
  LeftContent,
  StyledForm,
  StyledInput,
  StyledTextArea,
  StyledButton,
  Right,
};
