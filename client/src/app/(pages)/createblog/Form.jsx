import { useState } from "react";
import { ErrorMessage, Formik } from "formik";
import * as yup from "yup";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import useAuthAxios from "@/hooks/authHook";
import { TextField } from "@mui/material";
import {
  Form,
  SubmitButton,
  ImageContainer,
  StyledImageForm,
  StypedP,
} from "./styled";

///////////////////////////////////////////////////
const initialValues = {
  title: "",
  description: "",
};

const createPostValidationSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
});

const FormComponent = () => {
  const [imageFile, setImageFile] = useState(null);
  const authInstance = useAuthAxios();
  const handleFormSubmit = async (e) => {
    const formData = new FormData();
    formData.append("title", e.title);
    formData.append("description", e.description);
    if (imageFile) {
      formData.append("image", imageFile);
    }
    try {
      const response = await authInstance.post("/post/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Response:", response.data);
      e.title = "";
      e.description = "";
      setImageFile(null);
      alert("post published successfully");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={createPostValidationSchema}
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
          <StypedP>choose post image</StypedP>
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
            label="Title"
            name="title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.title && !!errors.title}
            helperText={<ErrorMessage name="title" />}
          />
          <TextField
            sx={{ width: "90%", marginBottom: "10px" }}
            fullWidth
            required
            variant="filled"
            multiline
            rows={4}
            label="Description"
            name="description"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.description && !!errors.description}
            helperText={<ErrorMessage name="description" />}
          />
          <SubmitButton>publish</SubmitButton>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
