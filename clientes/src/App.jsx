import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import RegistrePage from "./paginas/RegisterPage";
import Login from "./paginas/Login";
import Pendientes from "./paginas/Pendientes";
import PendientesForm from "./paginas/Formulariodependientes";

import Inicio from "./paginas/Inicio";
import ProtectedRoute from "./ProtectedRoute";
import Navbar from "./componentes/NavBar";
import { PendienteProvider } from "./context/PendientesContext";

import { ProductList } from "./componentes/ProductList";
import Footer from "./componentes/Footer";

function App() {
  return (
    <AuthProvider>
      <PendienteProvider>
        <BrowserRouter>
          <main className="container px-5">
            <Navbar />

            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<RegistrePage />} />

              <Route element={<ProtectedRoute />}>
                <Route path="/pendientes" element={<Pendientes />} />
                <Route path="/add-pendiente" element={<PendientesForm />} />
                <Route path="/pendientes/:id" element={<PendientesForm />} />

                <Route path="/productos" element={<ProductList />} />
                
              </Route>
            </Routes>
            <Footer/>
          </main>
        </BrowserRouter>
      </PendienteProvider>
    </AuthProvider>
  );
}

export default App;
