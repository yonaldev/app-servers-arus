import { FC, useId, useState } from "react";
import { updateServer } from "../../services/Server";

// Types
import { Server } from "../../types/Server.types";
import ListComponents from "../server/ListComponents";

const tasks = [
  "finalización de tareas",
  "Reinicio del servidor",
  "limpieza de cache",
];

type Props = {
  server: Server;
  nameClient?: string;
};

const ListServers: FC<Props> = ({ server, nameClient = "" }) => {
  const id = useId();
  const [modal, setModal] = useState<boolean>(false);

  const path: string =
    typeof window !== "undefined" ? window.location.pathname : "";

  const purgeServer = async (nameClient: string, name: string) => {
    const resp = await updateServer(nameClient, name);
  };

  const modalInfo = () => {
    const randomMessage = Math.round(Math.random() * (tasks.length - 1));
    return (
      // <dialog>
      //   <h1>Procesos ejecutados:</h1>
      //   <p>ejecución de clean</p>
      // </dialog>
      <div>
        <h1>Procesos ejecutados:</h1>
        <p>{tasks[randomMessage]}</p>
      </div>
    );
  };

  return (
    <>
      {modal && modalInfo()}
      {server.map(({ ip, name, components }) => (
        <>
          <div
            key={id}
            className="flex justify-between shadow-md rounded p-5 w-[500px] my-4"
            style={{ backgroundColor: "white" }}
          >
            <div className="flex flex-col justify-between w-60">
              <div>
                <span className="flex mt-1">
                  <label className="mr-2 text-blue-600">Dirección IP:</label>
                  <p>{ip}</p>
                </span>
                <span className="flex mt-1">
                  <label className="mr-2 text-blue-600">
                    Nombre del servidor:
                  </label>
                  <p>{name}</p>
                </span>
              </div>
              <div className="mt-8">
                <ListComponents components={components} />
              </div>

              {path.includes("/support") && (
                <div className="mt-6">
                  <button
                    className="border-2 font-bold px-4 py-2 rounded-lg text-sm"
                    style={{ borderColor: "#2563eb", color: "#2563eb" }}
                    onClick={() => {
                      purgeServer(nameClient, name);
                      setModal(true);
                    }}
                  >
                    Depurar Servidor
                  </button>
                </div>
              )}
            </div>
            <div className="flex items-center">
              <img
                src="/assets/Server.png"
                alt="Imagen de producto"
                height={200}
                width={200}
              />
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default ListServers;
