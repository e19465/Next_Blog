import { useState } from "react";
import { ErrorMessage, Formik } from "formik";
import * as yup from "yup";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import Image from "next/image";
import axios from "axios";
import { BASE_URL } from "@/hooks/authHook";
import {
  Form,
  SubmitButton,
  ImageContainer,
  StyledImageForm,
  StypedP,
} from "./styled";
import { usePathname, useRouter } from "next/navigation";

///////////////////////////////////////////////////
const initialValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const loginValidationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup.string().required("required"),
});

const FormComponent = () => {
  const [seePassword, setSeePassword] = useState(false);
  const [seeConfirmPassword, setSeeConfirmPassword] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [btnActive, setBtnActive] = useState(true);
  const pathName = usePathname();
  const router = useRouter();

  const handleFormSubmit = async (e) => {
    const formData = new FormData();
    formData.append("username", e.username);
    formData.append("password", e.password);
    formData.append("email", e.email);
    if (imageFile) {
      formData.append("image", imageFile);
    }
    setBtnActive(false);
    try {
      const response = await axios.post(`${BASE_URL}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      e.username = "";
      e.email = "";
      e.password = "";
      e.confirmPassword = "";
      setImageFile(null);
      alert("Registration successfully");
      if (pathName === "/register") {
        router.push("/login");
      }
      setBtnActive(true);
    } catch (error) {
      setBtnActive(true);
      console.error("Error:", error);
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
          <StypedP>choose profile picture</StypedP>
          <ImageContainer>
            {imageFile && (
              <StyledImageForm
                src={URL.createObjectURL(imageFile)}
                alt=""
                width={50}
                height={50}
                priority
              />
            )}
            <label
              htmlFor="file-upload"
              style={{
                marginBottom: "10px",
                display: "block",
                cursor: "pointer",
              }}
            >
              <FileUploadIcon />
            </label>
          </ImageContainer>
          <input
            type="file"
            id="file-upload"
            name="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) => setImageFile(e.target.files[0])}
          />
          <TextField
            sx={{ width: "90%", marginBottom: "10px" }}
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
            sx={{ width: "90%", marginBottom: "10px" }}
            fullWidth
            required
            variant="filled"
            type="text"
            label="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && !!errors.email}
            helperText={<ErrorMessage name="email" />}
          />
          <TextField
            sx={{ width: "90%", marginBottom: "20px" }}
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
          <TextField
            sx={{ width: "90%" }}
            autoComplete="new-password"
            fullWidth
            required
            variant="filled"
            type={seeConfirmPassword ? "text" : "password"}
            label="Confirm Password"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.confirmPassword}
            name="confirmPassword"
            error={!!touched.confirmPassword && !!errors.confirmPassword}
            helperText={touched.confirmPassword && errors.confirmPassword}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setSeeConfirmPassword(!seeConfirmPassword)}
                    edge="end"
                  >
                    {seeConfirmPassword ? (
                      <VisibilityOffIcon />
                    ) : (
                      <VisibilityIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <SubmitButton
            disabled={btnActive ? false : true}
            $active={btnActive ? "true" : "false"}
          >
            register
          </SubmitButton>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
