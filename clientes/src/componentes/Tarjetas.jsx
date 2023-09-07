import { usePendientes } from "../context/PendientesContext";
import { Link } from "react-router-dom";

function PendCard({ pendiente }) {
  const { deletePendiente } = usePendientes();
  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{pendiente.title}</h1>
        <div className="flex gap-x-2 items-center">
          <button
            onClick={() => {
              deletePendiente(pendiente._id);
            }}
          >
            Eliminar
          </button>
          <Link to={`/pendientes/${pendiente._id}`}>Editar</Link>
        </div>
      </header>
      <p className="text-slate-300">{pendiente.description}</p>
    </div>
  );
}
export default PendCard;
