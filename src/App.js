import React from "react";
import RegistrationForm from "./Components/RegistrationForm";
import LoginForm from "./Components/LoginForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { formFields } from "./formConfig";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<RegistrationForm formFields={formFields} />}
        />
        <Route
          path="/login"
          element={<LoginForm formFields={formFields} replace to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
