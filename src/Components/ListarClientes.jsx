import { useState, useEffect, useRef } from "react";
import { buscar, mostrarClientes } from "../services/Cliente";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";

function ListarClientes() {
  const navigate = useNavigate();
  const [clientes, setclientes] = useState([]);
  const [idBuscar, setidBuscar] = useState("");

  useEffect(() => {
    async function getClientes() {
      const data = await mostrarClientes();
      setclientes(data);
    }
    getClientes();
  }, []);

  const handleBusquedaChange = (evt) => {
    setidBuscar(evt.target.value);
  };

  const regresar = () => {
    navigate("/");
  };

  const filtrarClientes = idBuscar
    ? clientes.filter((cliente) =>
        cliente.idCliente.toString().includes(idBuscar)
      )
    : clientes;

  const mostrarTabla = filtrarClientes.length > 0;

  const generarPDF = async () => {
    const documento = new jsPDF();

    const tablaDatos = clientes.map((cliente) => [
      cliente.idCliente.toString(),
      cliente.Nombre,
      cliente.Apellido_paterno,
      cliente.Apellido_materno,
      cliente.RFC,
      cliente.Telefono,
      cliente.Correo,
    ]);
    documento.autoTable({
      startY: 30,
      head: [
        [
          "Id Cliente",
          "Nombre",
          "Apellido Paterno",
          "Apellido Materno",
          "RFC",
          "Telefono",
          "Correo",
        ],
      ],
      body: tablaDatos,
      didDrawPage:()=>{
        documento.setFontSize(18)
        documento.text("REPORTE DE CLIENTES",14,20)
      }
    });
    documento.save("reporteClientes.pdf")
  };

  return (
    <>
      <main className="bg-black w-screen h-screen absolute">
        <section className="bg-white flex flex-col rounded-[10px] items-center  ml-[250px] mt-[100px] w-[1100px] h-auto">
          <h1 className="font-semibold font-mono text-[30px] mt-2">
            Listado de Clientes
          </h1>
          <section>
            <div className="flex flex-row items-center mt-5 font-mono">
              <section className="space-x-[30px]  flex flex-row items-center">
                <label>Id de Cliente</label>
                <input
                  type="text"
                  name="id"
                  value={idBuscar}
                  onChange={handleBusquedaChange}
                  placeholder="Ingresa id de cliente"
                  className="rounded-md border-2 w-[350px] py-3 px-6 text-base font-medium text-black outline-none  focus:shadow-md  border-black "
                />
              </section>
            </div>
          </section>
          <div>
            {mostrarTabla ? (
              <>
                <table className="mt-5 table-auto mb-5 rounded-sm">
                  <thead className="bg-black ">
                    <tr className="  text-white ">
                      <th className="py-2 px-6 ">Id Cliente</th>
                      <th className="py-2 px-6">Nombre</th>
                      <th className="py-2 px-6">Apellido Paterno</th>
                      <th className="py-2 px-6">Apellido Materno</th>
                      <th className="py-2 px-6">RFC</th>
                      <th className="py-2 px-6">Telefono</th>
                      <th className="py-2 px-6">Correo</th>
                    </tr>
                  </thead>
                  <tbody className="bg-green-700 font-mono font-medium text-white">
                    {filtrarClientes.map((cliente) => (
                      <tr key={cliente.idCliente}>
                        <td className="py-2 px-6 ">{cliente.idCliente}</td>
                        <td className="py-2 px-6 ">{cliente.Nombre}</td>
                        <td className=" py-2 px-6">
                          {cliente.Apellido_paterno}
                        </td>
                        <td className=" py-2 px-6">
                          {cliente.Apellido_materno}
                        </td>
                        <td className="py-2 px-6">{cliente.RFC}</td>
                        <td className="py-2 px-6">{cliente.Telefono}</td>
                        <td className="py-2 px-6">{cliente.Correo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            ) : (
              <>
                <h2 className="font-mono font-medium text-red-800 text-xl">
                  {idBuscar
                    ? "No se encontraron resultados"
                    : "No se encontraron registros de clientes"}
                </h2>
              </>
            )}
          </div>
          <div className="flex flex-row justify-between  w-full">
            <button
              className="bg-red-600 rounded-[5px] flex justify-center items-center w-[150px] h-[35px] text-white mb-8  hover:bg-red-500 ml-[50px] font-medium font-mono text-xl"
              onClick={regresar}
            >
              Regresar
            </button>

            <button
              className="flex bg-red-600 text-white font-medium font-mono text-xl justify-center items-center rounded-[5px] w-[150px] h-[35px] mr-10 hover:bg-red-700"
              onClick={generarPDF}
            >
              Generar PDF
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default ListarClientes;
