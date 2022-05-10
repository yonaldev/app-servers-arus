import { FC, useId } from "react";

// Types
import { Component } from "../../../types/Server.types";

type Props = {
  components: Component;
};

const ListComponents: FC<Props> = ({ components }) => {
  const id = useId();

  return (
    <>
      {Object.entries(components).map(([key, { use, capacity }]) => (
        <div key={id}>
          <h2 className="font-bold text-blue-900 ">{key}</h2>
          <span className="flex mt-1 ">
            <label className="mr-2 text-blue-600">Uso:</label>
            <p
              className={`px-3 rounded-xl ${
                use >= 90 ? "bg-red-300" : "bg-green-300"
              }`}
            >
              {use}%
            </p>
          </span>
          <span className="flex mt-1">
            <label className="mr-2 text-blue-600">Capacidad:</label>
            <p>
              {capacity} {key === "cpu" ? "Núcleos" : "GB"}
            </p>
          </span>
        </div>
      ))}
    </>
  );
};

export default ListComponents;
