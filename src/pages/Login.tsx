import { useForm, SubmitHandler } from "react-hook-form";

import { useAppDispatch } from "../app/hooks";
import { login } from "../store/slice/authSlice";

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

  return (
    <div>
      <h5>Login</h5>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" {...register("email")} required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" {...register("password")} required />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
