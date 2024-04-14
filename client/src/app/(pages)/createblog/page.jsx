"use client";
import styled from "styled-components";
import FormComponent from "./Form";
import Image from "next/image";
import BLOG_WRITING from "../../../../public/assests/blogx.png";
import { m } from "@/app/responsive";
//////////////////////////////////////////////
const CreateBlogMain = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 20px 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${m({
    flexDirection: "column",
  })}
`;

const Left = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${m({
    width: "100%",
  })}
`;

const Right = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${m({
    width: "100%",
  })}
`;

const FieldSet = styled.fieldset`
  width: 90%;
  padding: 20px 10px;
  margin-top: 20px;
`;

const StyledImage = styled(Image)`
  width: 70%;
  height: auto;
`;

const CreateBlog = () => {
  return (
    <CreateBlogMain>
      <Left>
        <StyledImage src={BLOG_WRITING} alt="" priority />
      </Left>
      <Right>
        <FieldSet>
          <legend>cerate a blog post</legend>
          <FormComponent />
        </FieldSet>
      </Right>
    </CreateBlogMain>
  );
};

export default CreateBlog;
