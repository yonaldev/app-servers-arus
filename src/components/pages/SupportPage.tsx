import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Components
import { default as ListServers } from "../ListServers";

// Services
import { getServersWarningPerformance } from "../../services/Server";

// Types
import { Server } from "../../types/Server.types";
import { validateUser } from "../../utils/Utils";

const SupportPage = () => {
  const navigate = useNavigate();
  const [allClients, setAllClients] = useState<Array<any>>([]);

  const getServers = async () => {
    const servers = await getServersWarningPerformance();
    setAllClients(servers);
  };

  const validateLogin = () => {
    const rol: any = validateUser();
    if (JSON.parse(rol)) navigate("/");
  };

  useEffect(() => {
    validateLogin();
    getServers();
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center py-5">
        {allClients.map(({ client, servers }) => (
          <div
            className="my-6 px-3 rounded-md"
            style={{ backgroundColor: "#eef0f4" }}
          >
            <div className="py-3 flex justify-center">
              <h1 className="font-extrabold text-2xl text-indigo-900">
                {client}
              </h1>
            </div>
            <ListServers server={servers} nameClient={client} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SupportPage;
