import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer
      className="flex justify-center items-center h-36"
      style={{ backgroundColor: "#eef0f4" }}
    >
      <div className="mr-5">
        <img src="/assets/logo.png" alt="" height={30} width={30} />
      </div>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <span className="font-extrabold text-indigo-900">YonalDev</span>
      </a>
    </footer>
  );
};

export default Footer;
