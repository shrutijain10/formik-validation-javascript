import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  TextField,
  Container,
  Typography,
  Box,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const LoginForm = ({ formFields }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape(
      formFields.reduce((schema, field) => {
        schema[field.name] = field.validation;
        return schema;
      }, {})
    ),
    onSubmit: (values) => {
      console.log("Login Successful", values);
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
      sx={{ boxShadow: 3, borderRadius: "16px" }}
      p={4}
    >
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" fontWeight={"600"}>
          Login
        </Typography>
        <Box pt={2}>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              margin="normal"
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              {...formik.getFieldProps("email")}
            />
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"} // This line is updated
              variant="outlined"
              margin="normal"
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              {...formik.getFieldProps("password")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} edge="end">
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              style={{ marginTop: "16px" }}
            >
              Login
            </Button>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default LoginForm;
