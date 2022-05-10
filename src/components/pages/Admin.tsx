import React, { useId } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getAllServers,
  getAllServersForClient,
  increasePerformance,
  monitoring,
} from "../../services/Server";
import { validateUser } from "../../utils/Utils";
import ListServers from "../ListServers";

const AdminPage = () => {
  const id = useId();
  const navigate = useNavigate();
  const [allClient, setAllClients] = useState<any>([]);
  const [allServersForClient, setServersForAllClients] = useState<any>([]);
  const [message, setMessage] = useState<any>({
    client: "",
    name: "",
    hidden: false,
  });

  const getClients = async () => {
    const resp = await getAllServers();
    setAllClients(resp);
  };

  const getServeClient = async (client: string) => {
    const [{ servers }] = await getAllServersForClient(client);
    setServersForAllClients(servers);
  };

  const increaseServer = async () => {
    const { name, client } = await increasePerformance();
    setMessage({ name, client, hidden: true });

    const id = setTimeout(() => {
      setMessage({ hidden: false });
    }, 3000);
    clearTimeout(id);
  };

  const monitoringServer = async () => {
    await monitoring();
  };

  const messageAlert = () => {
    return (
      <div className="flex justify-center mt-5">
        <p className="font-bold text-red-500">
          El servidor {message.name} del cliente {message.client} esta
          presentando alteraciones
        </p>
      </div>
    );
  };

  const validateLogin = () => {
    const rol: any = validateUser();
    if (!JSON.parse(rol)) navigate("/");
  };

  useEffect(() => {
    validateLogin();
    getClients();

    // setInterval(() => increaseServer(), 50000);
    // setInterval(() => monitoringServer(), 7000);
  }, []);

  return (
    <>
      {message.hidden && messageAlert()}
      <div className="flex justify-between m-6">
        <h1 className="font-extrabold text-indigo-500">Administrador</h1>
        <Link to="/register-client">
          <button
            className="border-2 font-bold px-4 py-2 rounded-lg text-sm"
            style={{ borderColor: "#2563eb", color: "#2563eb" }}
          >
            Agrega un nuevo cliente
          </button>
        </Link>
      </div>
      <div className="flex items-center mx-5">
        <h2 className="font-bold">Clientes:</h2>
        {allClient.map(({ client }: any) => (
          <button
            key={id}
            className="m-2 py-2 px-8 border rounded-md border-indigo-500 hover:bg-indigo-500 hover:text-white text-indigo-900 font-bold"
            onClick={() => getServeClient(client)}
          >
            {client}
          </button>
        ))}
      </div>
      <div className="flex flex-col items-center">
        <ListServers server={allServersForClient} />
      </div>
    </>
  );
};

export default AdminPage;
