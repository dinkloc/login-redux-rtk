import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
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
  line-height: 1.25rem;
  font-weight: 500;
  color: #ffffff;
  background-color: #a60202;
  width: 100px;
`;

const StartComponent: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Div>
        <h1>
          Tài khoản để test email: nguyendinhloc502@gmail.com, password: vsii
        </h1>
      </Div>
      <Div>
        <Button onClick={() => navigate("/login")}>Start Demo</Button>
      </Div>
    </>
  );
};

export default StartComponent;
