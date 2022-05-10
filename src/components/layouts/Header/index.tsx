import { FC } from "react";

// Components
import { default as Nav } from "../Nav";

const Header: FC = () => {
  return (
    <>
      <header className="h-20 w-full" style={{ backgroundColor: "#eef0f4" }}>
        <Nav />
      </header>
    </>
  );
};

export default Header;
