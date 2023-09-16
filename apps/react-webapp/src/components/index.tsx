import { Outlet, Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/secret">Secret</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Index;
