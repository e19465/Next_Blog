"use client";

;
import { useTheme } from "@mui/material";
import { tokens } from "@/app/theme";
import AboutImage from "../../../../public/assests/contact.png";

import {
  ContactPageMain,
  StyledImage,
  Left,
  LeftContent,
  StyledForm,
  StyledInput,
  StyledTextArea,
  StyledButton,
  Right
} from "./styled";


/* || END STYLED COMPONENTS */

//////////////////////////////////////////////////////////////////////////////
const Contact = () => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const colors = tokens(mode);

  /////////////////////////////////////////////////////////////////////////////
  return (
    <ContactPageMain colors={colors} mode={mode}>
      <Left>
        <LeftContent>
          <StyledForm colors={colors} mode={mode}>
            <StyledInput colors={colors} mode={mode} placeholder="Your name" required/>
            <StyledInput colors={colors} mode={mode} placeholder="Your email" required/>
            <StyledInput colors={colors} mode={mode} placeholder="Your phone number(optional)" required/>
            <StyledTextArea colors={colors} mode={mode} placeholder="Message" required/>
            <StyledButton colors={colors} mode={mode} type="submit">send</StyledButton>
          </StyledForm>
        </LeftContent>
      </Left>
      <Right>
        <StyledImage
          src={AboutImage}
          alt="about page image"
          width={400}
          height={400}
          loading="lazy"
        />
      </Right>
    </ContactPageMain>
  );
};

export default Contact;
