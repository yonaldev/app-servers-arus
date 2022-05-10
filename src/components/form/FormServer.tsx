import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { saveClient } from "../../services/Server";

type Inputs = {
  client: string;
  server: Server;
};

type Server = {
  ip: string;
  name: string;
  component: Component;
};

type Component = {
  cpu: string;
  memory: string;
  disk: string;
  [name: string]: string;
};

const FormServe = () => {
  const [exisClient, setExisClient] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async ({
    client,
    server,
  }: Inputs) => {
    const { component, ip, name } = server;
    const { cpu, disk, memory } = component;
    const components = {
      cpu: {
        use: 20,
        capacity: cpu,
      },
      disk: {
        use: 20,
        capacity: disk,
      },
      memory: {
        use: 20,
        capacity: memory,
      },
    };

    const servers = [
      {
        ip,
        name,
        components,
      },
    ];

    const clt = { client, servers };

    const { statusCode } = await saveClient(clt);

    if (statusCode === 200) return setExisClient(true);

    navigate("/admin");
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <h1 className="text-indigo-500 text-2xl font-bold mb-10">
        Formulario de registro
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-72">
        <h2 className="text-indigo-500 text-xl font-bold">Cliente</h2>
        <input
          className="border-2 rounded text-center border-blue-400  outline-blue-400 h-10"
          placeholder="cliente"
          {...register("client", { required: true })}
        />
        {errors.client && <span>Este campo es obligatorio</span>}
        {exisClient && <span>El cliente ya existe</span>}

        <h2 className="text-indigo-500 text-xl font-bold mt-5">servidor</h2>

        <input
          className="border-2 rounded text-center border-blue-400  outline-blue-400 mb-4 h-10"
          placeholder="ip"
          {...register("server.ip", { required: true })}
        />
        {errors.server?.ip && <span>Este campo es obligatorio</span>}
        <input
          className="border-2 rounded text-center border-blue-400 outline-blue-400 h-10"
          placeholder="nombre del servidor"
          {...register("server.name", { required: true })}
        />
        {errors.server?.name && <span>Este campo es obligatorio</span>}
        <div>
          <h2 className="text-indigo-500 text-sm font-bold mt-2">
            Componentes
          </h2>
          <div className=" mt-2">
            <input
              className="border-2 rounded text-center border-blue-400  outline-blue-400 w-8"
              placeholder="#"
              {...register("server.component.cpu", { required: true })}
            />
            <label className="ml-5" htmlFor="">
              CPU (núcleos)
            </label>
            {errors.server?.component?.cpu && (
              <span>Este campo es obligatorio</span>
            )}
          </div>
          <div className="mt-2">
            <input
              className="border-2 rounded text-center border-blue-400  outline-blue-400 w-8"
              placeholder="GB"
              {...register("server.component.memory", { required: true })}
            />
            <label className="ml-5" htmlFor="">
              Memoria (RAM)
            </label>
            {errors.server?.component?.memory && (
              <span>Este campo es obligatorio</span>
            )}
          </div>
          <div className="mt-2">
            <input
              className="border-2 rounded text-center border-blue-400  outline-blue-400 w-8"
              placeholder="GB"
              {...register("server.component.disk", { required: true })}
            />
            <label className="ml-5" htmlFor="">
              Disco
            </label>
            {errors.server?.component?.disk && (
              <span>Este campo es obligatorio</span>
            )}
          </div>
        </div>
        <div className="flex justify-center">
          <input
            className="w-52 py-2 rounded-md bg-indigo-700 text-white font-bold mt-4"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default FormServe;
