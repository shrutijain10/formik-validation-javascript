import * as Yup from "yup";

export const formFields = [
  {
    name: "name",
    type: "text",
    label: "Name",
    validation: Yup.string()
      .max(100, "Name must be at most 100 characters")
      .required("Name is required"),
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    validation: Yup.string()
      .email("Invalid email address")
      .max(100, "Email must be at most 100 characters")
      .required("Email is required"),
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    validation: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .max(100, "Password must be at most 100 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number"
      )
      .required("Password is required"),
    showPasswordToggle: true,
  },
];
