"use client";
import styled from "styled-components";
import { xs, xm, m, l, xl, xl_2 } from "@/app/responsive";
import Image from "next/image";
//! Form.jsx components //
const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SubmitButton = styled.button`
  width: 90%;
  height: 40px;
  display: flex;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.5s;
  background-color: #166cc2;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.7px;
  margin-top: 20px;

  &:hover {
    background-color: dodgerblue;
  }
`;

const ImageContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

const StyledImageForm = styled(Image)`
  width: 50px;
  height: 50px;
  object-fit: cover;
  overflow: hidden;
  margin-right: 10px;
`;

const StypedP = styled.p`
  width: 90%;
  text-align: left;
  margin-bottom: 10px;
`;

//! end: Form.jsx components //

export { Form, SubmitButton, ImageContainer, StyledImageForm, StypedP };
