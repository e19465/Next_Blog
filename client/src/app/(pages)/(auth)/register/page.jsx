"use client";

import { useRouter } from "next/navigation";
import FormComponent from "../../admin/Form";
import {
  RegMain,
  Container,
  FieldSet,
  LinkBtnContainer,
  StyledButton,
} from "./styled";

const Register = () => {
  const router = useRouter();
  return (
    <RegMain>
      <Container>
        <FieldSet>
          <legend>Sign Up</legend>
          <FormComponent />
        </FieldSet>
        <LinkBtnContainer>
          <StyledButton onClick={() => router.push("/login")}>
            Already have an account? login.
          </StyledButton>
          <StyledButton>Forgot password? reset.</StyledButton>
        </LinkBtnContainer>
      </Container>
    </RegMain>
  );
};

export default Register;
