import { useForm } from "react-hook-form";
import { usePendientes } from "../context/PendientesContext";
import {useNavigate , useParams} from 'react-router-dom';
import { useEffect } from "react";
function PendientesForm() {
  const { register, handleSubmit, setValue} = useForm();
  const { createPendiente , getPendiente, updatePendiente } = usePendientes();
  const navigate = useNavigate();
  const params = useParams ();


  useEffect(() => {
    async function loadPendiente(){
    if (params.id){
      const pendiente = await getPendiente (params.id);
      console.log(pendiente)
      setValue('title', pendiente.title)
      setValue('description', pendiente.description)

    }
    }
    loadPendiente()
  },[ ]);

  const onSubmit = handleSubmit((data) => {
    if (params.id){
      updatePendiente(params.id, data);

    } else{
      createPendiente(data);
      
    }
    navigate ('/pendientes')
  });

  return (


    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Titulo"
          {...register("title")}
          className="w-full bg-zinc-700 text-white px-4vpy2 rounded-md my-2"
          autoFocus
        />
        <textarea
          rows="3"
          placeholder="Descripcion"
          {...register("description")}
          className="w-full bg-zinc-700 text-white px-4vpy2 rounded-md my-2"
        ></textarea>
        <button>Guardar</button>
      </form>
    </div>
  );
}

export default PendientesForm;
