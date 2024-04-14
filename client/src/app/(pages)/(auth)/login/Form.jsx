import { useState } from "react";
import styled from "styled-components";
import { ErrorMessage, Formik } from "formik";
import * as yup from "yup";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import axios from "axios";
import { BASE_URL } from "@/hooks/authHook";
import { useRouter } from "next/navigation";
import {
  loginStart,
  loginSuccess,
  loginFailure,
} from "@/redux/features/user/userSlice";
import { useDispatch } from "react-redux";

const Form = styled.form``;

const SubmitButton = styled.button`
  width: 100%;
  height: 40px;
  display: flex;
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

  &:hover {
    background-color: dodgerblue;
  }
`;

const initialValues = {
  username: "",
  password: "",
};

const loginValidationSchema = yup.object().shape({
  username: yup.string().required("Enter Username"),
  password: yup.string().required("Enter Password"),
});

const FormComponent = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [seePassword, setSeePassword] = useState(false);
  const handleFormSubmit = async (e) => {
    dispatch(loginStart());
    try {
      const response = await axios.post(
        `${BASE_URL}/login`,
        {
          username: e.username,
          password: e.password,
        },
        {
          headers: {
            "Cache-Control": "no-store",
          },
        }
      );
      if (response.status === 200) {
        dispatch(loginSuccess(response.data));
        router.push("/");
      }
    } catch (err) {
      dispatch(loginFailure());
      console.log(err);
      return err;
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginValidationSchema}
      onSubmit={handleFormSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <Form onSubmit={handleSubmit}>
          <TextField
            sx={{ width: "100%", marginBottom: "10px" }}
            fullWidth
            required
            variant="filled"
            type="text"
            label="Username"
            name="username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.username && !!errors.username}
            helperText={<ErrorMessage name="username" />}
          />
          <TextField
            sx={{ width: "100%", marginBottom: "20px" }}
            fullWidth
            required
            autoComplete="new-password"
            variant="filled"
            type={seePassword ? "text" : "password"}
            label="Password"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.password}
            name="password"
            error={!!touched.password && !!errors.password}
            helperText={touched.password && errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => {
                      setSeePassword(!seePassword);
                    }}
                    edge="end"
                  >
                    {seePassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <SubmitButton type="submit">login</SubmitButton>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
