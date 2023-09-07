import { createContext, useContext, useState } from "react";
import {
  createPendienteRequest,
  getPendientesRequest,
  deletePendienteRequest,
  getPendienteRequest,
  updatePendienteRequest,
} from "../api/pendientes";

const PendienteContext = createContext();

export const usePendientes = () => {
  const context = useContext(PendienteContext);

  if (!context) {
    throw new Error("usePendientes must be used within a PendienteProvider");
  }
  return context;
};

export function PendienteProvider({ children }) {
  const [pendientes, setPendientes] = useState([]);

  const getPendientes = async () => {
    try {
      const res = await getPendientesRequest();
      setPendientes(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createPendiente = async (pendiente) => {
    const res = await createPendienteRequest(pendiente);
    console.log(res);
  };
  const deletePendiente = async (id) => {
    try {
      const res = await deletePendienteRequest(id);
      if (res.status == 204)
        setPendientes(pendientes.filter((pendiente) => pendiente._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const getPendiente = async (id) => {
    try {
      const res = await getPendienteRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updatePendiente = async (id, pendiente) => {
    try {
      await updatePendienteRequest(id, pendiente);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PendienteContext.Provider
      value={{
        pendientes,
        createPendiente,
        getPendientes,
        deletePendiente,
        getPendiente,
        updatePendiente,
      }}
    >
      {children}
    </PendienteContext.Provider>
  );
}
