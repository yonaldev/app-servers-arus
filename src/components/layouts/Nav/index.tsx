import { Link } from "react-router-dom";

const Nav = () => (
  <nav className="flex items-center px-8 justify-between h-[80px]">
    <div className="flex items-center">
      <Link to="/">
        <div className="flex justify-center items-center mr-5">
          <img src="/assets/logo.png" alt="" height={50} width={50} />
        </div>
      </Link>
      <div>
        <div
          className="inline-flex items-end font-bold"
          style={{ color: "#0f5fb8" }}
        >
          <h2 className="font-bold text-2xl">A</h2>
          <h3>rus</h3>
        </div>
        <hr
          className="border-b-2 w-[60px]"
          style={{ borderColor: "#554d9d" }}
        />
      </div>
    </div>
  </nav>
);

export default Nav;
