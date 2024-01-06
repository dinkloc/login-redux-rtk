import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { logout } from "../store/slice/authSlice";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

const H1 = styled.h1`
  color: black;
  font-size: 20px;
  display: inline-block;
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
    background-color: #bf000061;
  }
`;

const Dashboard: React.FC = () => {
  const {
    userInfo: { email },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  return (
    <Div>
      <H1>Dashboard email User: </H1>
      <H1>{email}</H1>
      <Button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Log Out
      </Button>
    </Div>
  );
};

export default Dashboard;
