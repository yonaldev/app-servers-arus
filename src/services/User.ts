import axios from "axios";

const URL_BASE = "http://localhost:8080/api/v1/arus_server";

export const getAllUsers = async (): Promise<Array<any>> =>
  await axios
    .get(`${URL_BASE}/user`)
    .then(({ data }) => data.result)
    .catch((err) => console.error(err));
