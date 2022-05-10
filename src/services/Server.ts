import axios from "axios";
import { Client } from "../types/Client.types";
import { Server } from "../types/Server.types";

const URL_BASE = "http://localhost:8080/api/v1/arus_server";

export const getServersWarningPerformance = async (): Promise<Array<any>> =>
  await axios
    .get(`${URL_BASE}/server/alerts`)
    .then(({ data }) => data.result)
    .catch((err) => console.error(err));

export const getAllServers = async (): Promise<Array<Server>> =>
  await axios
    .get(`${URL_BASE}/server`)
    .then(({ data }) => data.result)
    .catch((err) => console.error(err));

export const getAllServersForClient = async (
  client: string
): Promise<Array<Client>> =>
  await axios
    .get(`${URL_BASE}/server/${client}`)
    .then(({ data }) => data.result)
    .catch((err) => console.error(err));

export const updateServer = async (
  nameClient: string,
  name: string
): Promise<any> =>
  await axios
    .put(`${URL_BASE}/server?client=${nameClient}&server=${name}`)
    .then(({ data }) => data.result)
    .catch((err) => console.error(err));

export const increasePerformance = async (): Promise<any> =>
  await axios
    .put(`${URL_BASE}/server/performance`)
    .then(({ data }) => data.result)
    .catch((err) => console.error(err));

export const monitoring = async (): Promise<any> =>
  await axios
    .get(`${URL_BASE}/server/monitoring`)
    .then(({ data }) => data.result)
    .catch((err) => console.error(err));

export const saveClient = async (data: any): Promise<any> =>
  await axios
    .post(`${URL_BASE}/client`, data)
    .then(({ data }) => data.result)
    .catch((err) => console.error(err));
