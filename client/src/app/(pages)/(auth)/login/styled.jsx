"use client";
import styled from "styled-components";

const LoginMain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0d0c22;
`;

const Container = styled.div`
  width: 400px;
  height: 500px;
  background-color: #1f2a40;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 10px;
`;

const FieldSet = styled.fieldset`
  width: 100%;
  padding: 20px 10px;
  margin-top: 20px;
`;

const LinkBtnContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledButton = styled.button`
  width: 100%;
  height: 40px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  color: dodgerblue;
  font-size: 12px;
  transition: all 0.5s;

  &:hover {
    color: lightblue;
  }
`;

export { LoginMain, Container, FieldSet, LinkBtnContainer, StyledButton };
