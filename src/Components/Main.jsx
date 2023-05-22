import { NavLink } from "react-router-dom";

export default function Main() {
  return (
    <>
      <main className="bg-black w-screen h-screen absolute">
        <section className="bg-white flex flex-col rounded-[10px] items-center ml-[500px] mt-[100px] w-[600px] h-[550px] bg-center">
          <h1 className="font-semibold font-mono text-[30px] mt-2">
            Control de clientes
          </h1>
          <div className="options  flex flex-col w-full items-center font-semibold font-mono text-[20px] space-y-[40px] mt-[60px]">
            <NavLink
              to="/agregar"
              className="rounded-[5px] text-white bg-green-600 h-[50px] w-[220px] flex justify-center items-center hover:bg-green-700 hover:text-white "
            >
              Agregar Cliente
            </NavLink>
            <NavLink
              to="/modificar"
              className="rounded-[5px] text-white bg-yellow-500 h-[50px] w-[220px] flex justify-center items-center hover:bg-yellow-600 hover:text-white "
            >
              Modificar Cliente
            </NavLink>
            <NavLink
              to="eliminar"
              className="rounded-[5px] text-white bg-red-600 h-[50px] w-[220px] flex justify-center items-center
                hover:bg-red-800 hover:text-white "
            >
              Eliminar Cliente
            </NavLink>
            <NavLink
              to="listar"
              className="rounded-[5px] text-white bg-blue-500 h-[50px] w-[220px] flex justify-center items-center
                hover:bg-blue-600 hover:text-white "
            >
              Listar Clientes
            </NavLink>
          </div>
        </section>
      </main>
    </>
  );
}
