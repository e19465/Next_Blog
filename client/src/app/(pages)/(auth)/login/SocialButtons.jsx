"use client";

import styled from "styled-components";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";

const SocialButton = styled.button`
  width: 100%;
  height: 35px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s;
  outline: none;
  border: 1px solid #fff;

  &:hover {
    filter: brightness(1.5);
  }
`;

const ButtonIconContainer = styled.div`
  background-color: ${(props) => props.$bg};
  width: 50px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;
const ButtonTextContainer = styled.div`
  background-color: ${(props) => props.$bg};
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.span`
  font-size: 13px;
  color: #fff;
  letter-spacing: 0.5px;
`;

const SocialButtons = () => {
  return (
    <>
      <SocialButton>
        <ButtonIconContainer $bg="darkred">
          <GoogleIcon />
        </ButtonIconContainer>
        <ButtonTextContainer $bg="red">
          <ButtonText>continue with google</ButtonText>
        </ButtonTextContainer>
      </SocialButton>
      <SocialButton>
        <ButtonIconContainer $bg="darkblue">
          <FacebookIcon />
        </ButtonIconContainer>
        <ButtonTextContainer $bg="blue">
          <ButtonText>continue with facebook</ButtonText>
        </ButtonTextContainer>
      </SocialButton>
      <SocialButton>
        <ButtonIconContainer $bg="#333">
          <GitHubIcon />
        </ButtonIconContainer>
        <ButtonTextContainer $bg="#555">
          <ButtonText>continue with github</ButtonText>
        </ButtonTextContainer>
      </SocialButton>
    </>
  );
};

export default SocialButtons;
