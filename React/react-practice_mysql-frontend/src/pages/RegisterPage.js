import React from "react";
import AuthForm from "../components/auth/AuthForm";
import AuthTemplate from "../components/auth/AuthTemplate";
import RegisterForm from "../containers/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <div>
      <AuthTemplate>
        <RegisterForm />
      </AuthTemplate>
    </div>
  );
};

export default RegisterPage;
