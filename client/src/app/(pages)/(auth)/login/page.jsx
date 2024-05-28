"use client";

import SocialButtons from "./SocialButtons";
import FormComponent from "./Form";
import { useRouter } from "next/navigation";
import {
  LoginMain,
  Container,
  FieldSet,
  LinkBtnContainer,
  StyledButton,
} from "./styled";

const Login = () => {
  const router = useRouter();

  return (
    <LoginMain>
      <Container>
        {/* <SocialButtons /> */}
        <FieldSet>
          <legend>Sign In</legend>
          <FormComponent />
        </FieldSet>
        <LinkBtnContainer>
          <StyledButton onClick={() => router.push("/register")}>
            Don&apos;t have an account? register.
          </StyledButton>
          <StyledButton>Forgot password? reset.</StyledButton>
        </LinkBtnContainer>
      </Container>
    </LoginMain>
  );
};

export default Login;
