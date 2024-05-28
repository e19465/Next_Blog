"use client";

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
  Right,
} from "./styled";
import { useState } from "react";
import emailjs from "@emailjs/browser";

//////////////////////////////////////////////////////////////////////////////
const Contact = () => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const colors = tokens(mode);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const NEXT_EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const NEXT_EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const NEXT_EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const templateParams = {
    user_subject: "New client from Next 14 Blog",
    user_name: form.name,
    message: form.message,
    user_email: form.email,
    user_phone: form.phone,
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .send(
        NEXT_EMAILJS_SERVICE_ID,
        NEXT_EMAILJS_TEMPLATE_ID,
        templateParams,
        NEXT_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        setForm({ name: "", email: "", message: "", phone: "" });
        alert("Message sent successfully!");
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
        alert("Something went wrong! Please try again");
      });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /////////////////////////////////////////////////////////////////////////////
  return (
    <ContactPageMain $colors={colors} $mode={mode}>
      <Left>
        <LeftContent>
          <StyledForm $colors={colors} $mode={mode} onSubmit={handleSendEmail}>
            <StyledInput
              $colors={colors}
              $mode={mode}
              placeholder="Your name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <StyledInput
              $colors={colors}
              $mode={mode}
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <StyledInput
              $colors={colors}
              $mode={mode}
              name="phone"
              placeholder="Your phone number(optional)"
              value={form.phone}
              onChange={handleChange}
              required
            />
            <StyledTextArea
              $colors={colors}
              $mode={mode}
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              required
            />
            <StyledButton
              $colors={colors}
              $mode={mode}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send"}
            </StyledButton>
          </StyledForm>
        </LeftContent>
      </Left>
      <Right>
        <StyledImage
          src={AboutImage}
          alt="about page image"
          width={400}
          height={400}
          priority
        />
      </Right>
    </ContactPageMain>
  );
};

export default Contact;
