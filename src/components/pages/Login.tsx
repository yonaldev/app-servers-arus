import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Services
import { getAllUsers } from "../../services/User";

const LoginPage = () => {
  const [emailInput, setEmailInput] = useState<string>("");
  let navigate = useNavigate();

  const login = async () => {
    const users = await getAllUsers();

    const user = users.find(({ email }) => email === emailInput)?.idRol;
    if (user === 1) {
      window.localStorage.setItem("admin", "true");
      navigate("/admin");
    }

    if (user === 2) {
      window.localStorage.setItem("admin", "false");
      navigate("/support");
    }
  };

  return (
    <div className="py-3 flex flex-col items-center justify-center">
      <h1 className="font-extrabold text-2xl text-indigo-900">
        Bienvenidos nuestra plataforma de administración de servidores
      </h1>
      <input
        className="border-b-2 mt-20 mb-10 w-72 text-center"
        placeholder="Ingresa tú correo electrónico"
        type="email"
        name="email"
        id="email"
        onChange={(event) => setEmailInput(event.target.value)}
      />
      <button
        onClick={() => login()}
        className="border-2 font-bold px-4 py-2 rounded-lg text-sm"
        style={{ borderColor: "#2563eb", color: "#2563eb" }}
      >
        Ingresar
      </button>
    </div>
  );
};

export default LoginPage;
