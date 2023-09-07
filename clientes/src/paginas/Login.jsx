import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Login() {

  const { 
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {signin, errors: signinErrors,isAuthenticated} = useAuth();
  const navigate = useNavigate ()

const onSubmit = handleSubmit((data) => {
  signin(data);
});
useEffect(() => {if (isAuthenticated) navigate ("/pendientes");},
[ isAuthenticated]);

return (
  <div className="h-[calc(100vh-100px)] flex items-center justify-center">
    <div className="cajalogin">

    {
        signinErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white text-center" key={i}>
            {error}
          </div>
        ))
      }

      <h1 className="text-2xl font-bold">Iniciar sesión</h1>
      <form className="form"
        onSubmit={onSubmit}
      >

        <input type="email" {...register("email", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder="Gmail"
        />
        {errors.email && (
          <p className="text-red-500">Gmail es requerido</p>
        )}

        <input type="password" {...register("password", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder="Contraseña"
        />
        {errors.password && (
          <p className="text-red-500">Contraseña es requerida</p>
        )}

        <button type="submit">Login</button>
      </form>

      <p className="flex gap-x-2 justify-between">
          ¿No tienes una cuenta? <Link to="/register" className="text-sky-500">Registrarse</Link>
        </p>
    </div>
  </div>
)
}

export default Login