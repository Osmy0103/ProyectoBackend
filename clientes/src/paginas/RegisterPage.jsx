import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate,Link } from 'react-router-dom';


function RegisterPage() {
    const { register, handleSubmit,
        formState: { errors },
    } = useForm();
    const { signup, isAuthenticated, errors: registerErrors } = useAuth();
    const navigate = useNavigate();


    useEffect(() => {
        if (isAuthenticated) navigate("/pendientes");

    }, [isAuthenticated])

    const onSubmit = handleSubmit(async (values) => {
        signup(values);

    });

    return (
        <div className="h-[calc(100vh-100px)] flex items-center justify-center">
            
        <div className="cajaregis">
        <h1 className="text-2xl font-bold">Create una cuenta</h1>
            {registerErrors.map((error, i) => (
                <div className="bg-red-500 p-2 text-white" key={i} >
                    {error}

                </div>
            ))
            }
            <form className="formulario" onSubmit={onSubmit}>
                <input type="text" {...register("username", { required: true })}
                    className="w full bg-zinc-700 text-white px-4 py-4 rounded-md my-2"
                    placeholder="Nombre de Usuario"


                />
                {errors.username && (
                    <p className="text-red-500">El nombre de usuario es requerido</p>
                )}


                <input type="email" {...register("email", { required: true })}
                    className="w full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="Gmail" />

                {errors.email && (
                    <p className="text-red-500">El gmail es requerido</p>
                )}


                <input type="password" {...register("password", { required: true })}

                    className="w full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="Contraseña"
                />

                {errors.password && (
                    <p className="text-red-500"> La Contraseña es requerida</p>
                )}



                <button Type="submit">
                    Registrate

                </button>
            </form>

            <p className="flex gap-x-2 justify-between">
          ¿Ya tienes una cuenta? <Link to="/login" className="text-sky-500">Ingresar</Link>
        </p>


        </div>
        </div>

    );
}

export default RegisterPage