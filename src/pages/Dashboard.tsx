import { useAppSelector } from "../app/hooks";

const Dashboard: React.FC = () => {
  const isSuccess = useAppSelector((state) => state.isSuccess);
  console.log(isSuccess);
  return <div>Dashboard</div>;
};

export default Dashboard;
