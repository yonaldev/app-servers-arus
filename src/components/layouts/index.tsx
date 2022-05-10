import { FC, ReactNode } from "react";

// Components
import { default as Header } from "./Header";
import { default as Footer } from "./Footer";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ minHeight: "72vh" }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
