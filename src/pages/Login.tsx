import { useForm, SubmitHandler } from "react-hook-form";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { login } from "../store/slice/authSlice";
import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Title = styled.h5`
  font-size: 1.5em;
  text-align: center;
  color: #09720086;
`;

const WrapForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  display: block;
  padding: 0.625rem;
  border-radius: 0.5rem;
  border-width: 1px;
  border-color: #d1d5db;
  width: 100%;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #111827;
  background-color: #f9fafb;
  margin: 10px 0 10px 0;
`;

const Button = styled.button`
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;

  padding-left: 1.25rem;
  padding-right: 1.25rem;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  border-width: 1px;
  border-color: #d1d5db;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: #111827;
  background-color: #ffffff;
  width: 100px;

  &:hover {
    background-color: #03942863;
  }
`;

const WrapButton = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin: 20px 0 0 0;
`;

type FormValue = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const { register, handleSubmit } = useForm<FormValue>();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FormValue> = (data) => {
    const { email, password } = data;
    dispatch(login({ email, password }));
  };
  const isSuccess = useAppSelector((state) => state.isSuccess);
  console.log(isSuccess);
  const navigate = useNavigate();
  useEffect(() => {
    if (isSuccess) {
      navigate("/dashboard");
    }
  }, [isSuccess, navigate]);

  return (
    <div>
      <Title>VSII Login Training</Title>
      <WrapForm>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input
              type="email"
              {...register("email")}
              required
              placeholder="Email"
            />
          </div>
          <div>
            <Input
              type="password"
              {...register("password")}
              required
              placeholder="Password"
            />
          </div>
          <WrapButton>
            <Button>Sign In</Button>
            <Button>Sign Up</Button>
          </WrapButton>
        </form>
      </WrapForm>
    </div>
  );
};

export default Login;
