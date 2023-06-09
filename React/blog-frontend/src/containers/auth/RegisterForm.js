import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { initializeForm, changeField, register } from "../../modules/auth";
import AuthForm from "../../components/auth/AuthForm";
import { check } from "../../modules/user";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: "register",
        key: name,
        value,
      })
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password, passwordConfirm } = form;
    if ([username, password, passwordConfirm].includes("")) {
      setError("빈칸 모두 입력하시오");
      return;
    }
    if (password !== passwordConfirm) {
      setError("비밀번호가 일치하지않습니다");
      dispatch(changeField({ form: "register", key: "password", value: "" }));
      dispatch(
        changeField({ form: "register", key: "passwordConfirm", value: "" })
      );
      return;
    }
    dispatch(register({ username, password }));
  };

  useEffect(() => {
    dispatch(initializeForm("register"));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      if (authError.response.status === 409) {
        setError("이미존재하는 계정명입니다.");
        return;
      }
      setError("회원가입실패:기타이유");
      return;
    }
    if (auth) {
      console.log("회원가입 성공");
      console.log(auth);
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      console.log("checkAPI 성공");
      console.log(user);
      navigate("/");
      try {
        localStorage.setItem("user", JSON.stringify(user));
      } catch (e) {
        console.log("localStorage is not working");
      }
    }
  }, [navigate, user]);

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default RegisterForm;
