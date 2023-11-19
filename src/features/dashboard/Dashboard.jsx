import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/services");
  }, []);
  return <>HomeScreen</>;
};
