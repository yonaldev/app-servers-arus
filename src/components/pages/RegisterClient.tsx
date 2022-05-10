import React from "react";
import { Link } from "react-router-dom";

// Services
import FormServe from "../form/FormServer";

const RegisterClientPage = () => {
  return (
    <>
      <div className="flex flex-col m-6">
        <Link className="underline font-bold text-indigo-600" to="/admin">
          Atrás
        </Link>
      </div>
      <FormServe />
    </>
  );
};

export default RegisterClientPage;
