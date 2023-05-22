import { Route, Routes } from "react-router-dom";
import Main from "../views/Main";
import Agregar from "../views/Agregar";
import Eliminar from "../views/Eliminar";
import Modificar from "../views/Modificar";
import Listar from "../views/Listar";

function Rutas() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="agregar" element={<Agregar />}></Route>
        <Route path="eliminar" element={<Eliminar />}></Route>
        <Route path="modificar" element={<Modificar />}></Route>
        <Route path="listar" element={<Listar />}></Route>
      </Routes>
    </>
  );
}

export default Rutas;
