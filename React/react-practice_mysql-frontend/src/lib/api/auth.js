import client from "./client";

export const login = ({ id, password }) =>
  client.post("/auth/login", { id, password });

export const register = ({ id, password }) =>
  client.post("/auth/register", { id, password });

export const check = () => client.get("/auth/check");
