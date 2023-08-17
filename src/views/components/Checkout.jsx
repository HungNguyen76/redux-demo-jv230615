import { Navigate } from "react-router-dom";
import Men from "./Men";

export default function Checkout() {
  const isLogin = true;

  return isLogin ? <Men /> : <Navigate to={"/login"} />;
}
