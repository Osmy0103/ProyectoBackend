import { useEffect } from "react";
import { usePendientes } from "../context/PendientesContext";
import PendCard from "../componentes/Tarjetas";

function Pendientespage() {

  
  const { getPendientes, pendientes } = usePendientes();

  useEffect(() => {
    getPendientes();
  }, []);

  if (pendientes.length ==0)return (<h1> No hay pendientes </h1>);

  return (

    <div className="grid grid-cols-3 gap-2">
      {pendientes.map((pendiente) => (
        <PendCard pendiente={pendiente} key={pendiente._id}/>
       
      ))}
    </div>
  );
}

export default Pendientespage;
