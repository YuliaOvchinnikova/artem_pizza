import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsAuthorized } from "./state/auth/selectors";

export const Navigation = () => {
  const isAuthorized = useSelector(getIsAuthorized);

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/payment">Payment page</Link>
          </li>
          <li>
            <Link to="/bill">Bill page</Link>
          </li>
          <li>
            <Link to="/order">Order</Link>
          </li>
          {isAuthorized && (
            <li>
              <Link to="/orderHistory">Order History</Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};
