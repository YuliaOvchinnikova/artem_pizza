import { Link } from "react-router-dom";

export const Navigation = () => {
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
          <li>
            <Link to="/orderHistory">Order History</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
