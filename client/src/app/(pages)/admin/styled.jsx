"use client";
import styled from "styled-components";
import { xs, xm, m, l, xl, xl_2 } from "@/app/responsive";
import Image from "next/image";

//! page.jsx components //
const AdminMain = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const UserManageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  ${l({
    flexDirection: "column",
  })}
`;

const AllUsersContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  ${l({
    width: "100%",
  })}
`;

const AddUserContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${l({
    width: "100%",
  })}
`;

const FieldSet = styled.fieldset`
  width: 90%;
  padding: 10px;
  margin-top: 20px;
`;

//! end: page.jsx components //

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
  cursor: ${(props) => (props.$active === "false" ? "not-allowed" : "pointer")};
  transition: all 0.5s;
  background-color: ${(props) =>
    props.$active === "false" ? "#555" : "#166cc2"};
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.7px;
  margin-top: 20px;

  &:hover {
    background-color: ${(props) =>
      props.$active === "false" ? "#555" : "dodgerblue"};
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

//! UsersTable.jsx components //
const TableMain = styled.div`
  margin: 0px;
  width: 90%;
  height: 90%;
  overflow: auto;

  ${xm({
    width: "95%",
  })};
`;

const BtnsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  width: 30px;
  height: 30px;
  cursor: pointer;
  background-color: firebrick;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 3px;
  border: none;
  outline: none;
  transition: all 0.5s;

  &:hover {
    filter: brightness(1.5);
  }
`;

const StyledDiv = styled.div`
  overflow-x: auto;
  &::-webkit-scrollbar {
    height: 8px;
  }
`;

//! end: UsersTable.jsx components //

export {
  AdminMain,
  UserManageContainer,
  AllUsersContainer,
  AddUserContainer,
  FieldSet,
  Form,
  SubmitButton,
  ImageContainer,
  StyledImageForm,
  StypedP,
  TableMain,
  BtnsContainer,
  Button,
  StyledDiv,
};
