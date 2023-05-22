import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./ModalAviso";
import { buscar, modificar } from "../services/Cliente";

let modificado;

function ModificarCliente() {
  const navigate = useNavigate();
  const [mostrarModal, setmostrarModal] = useState(false);
  const [busqueda, setbusqueda] = useState(false);
  const [idBuscar, setidBuscar] = useState("");

  const [formValues, setFormValues] = useState({
    id: "",
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    rfc: "",
    telefono: "",
    correo: "",
  });

  const handleInputChange = (evt) => {
    setFormValues({
      ...formValues,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleBusquedaChange = (evt) => {
    setidBuscar(evt.target.value);
  };

  const handleSubmitBusqueda = async (evt) => {
    evt.preventDefault();
    const data = await buscar(idBuscar);
    console.log(data);
    setFormValues({
      nombre: data.Nombre,
      apellidoPaterno: data.Apellido_paterno,
      apellidoMaterno: data.Apellido_materno,
      rfc: data.RFC,
      telefono: data.Telefono,
      correo: data.Correo,
    });

    setbusqueda(true);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const data = await modificar(
      idBuscar,
      formValues.nombre,
      formValues.apellidoPaterno,
      formValues.apellidoMaterno,
      formValues.rfc,
      formValues.telefono,
      formValues.correo
    );
    setmostrarModal(true);

    if (data) {
      modificado = true;
    } else {
      modificado = false;
    }
  };

  const cancelarModificar = () => {
    navigate("/");
  };

  const cerrarModal = () => {
    setmostrarModal(false);
    navigate("/");
  };

 
  const deshabilitar = idBuscar === "" || !busqueda;

  return (
    <>
      <main className="bg-black w-screen h-auto absolute ">
        <section className="bg-white flex flex-col rounded-[10px] items-center  ml-[400px] mt-[45px] w-[800px] h-auto mb-5 ">
          <h1 className="font-semibold font-mono text-[30px] mt-2 ">
            Modificar Cliente
          </h1>

          <div className="flex flex-col w-full items-center font-mono text-[20px] space-y-[20px] mt-[55px] mb-5">
            <h1 className="font-semibold text-xl">DATOS</h1>
            <form onSubmit={handleSubmitBusqueda}>
              <div className="flex flex-row items-center">
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
                <button className="rounded-[5px] bg-blue-600 ml-10 h-[45px] w-[110px] flex justify-center items-center text-white text-xl hover:bg-blue-700">
                  Buscar
                </button>
              </div>
            </form>

            <section className="space-x-[30px]">
              <label>Nombre</label>
              <input
                type="text"
                name="nombre"
                placeholder="Ingresa tu nombre"
                onChange={handleInputChange}
                value={formValues.nombre}
                disabled={deshabilitar}
                className="rounded-md border-2 w-[350px] py-3 px-6 text-base font-medium text-black outline-none  focus:shadow-md  border-black "
              />
            </section>
            <section className="space-x-[30px] -ml-[110px]">
              <label>Apellido Paterno</label>
              <input
                type="text"
                name="apellidoPaterno"
                placeholder="Ingresa tu apellido paterno"
                onChange={handleInputChange}
                value={formValues.apellidoPaterno}
                disabled={deshabilitar}
                className="rounded-md border-2 py-3 px-6  w-[350px] text-base font-medium text-black outline-none  focus:shadow-md  border-black "
              />
            </section>
            <section className="space-x-[30px] -ml-[110px]">
              <label>Apellido Materno</label>
              <input
                type="text"
                name="apellidoMaterno"
                placeholder="Ingresa tu apellido materno"
                onChange={handleInputChange}
                value={formValues.apellidoMaterno}
                disabled={deshabilitar}
                className="rounded-md border-2  py-3 px-6 text-base font-medium text-black outline-none  w-[350px] focus:shadow-md  border-black "
              />
            </section>
            <section className="space-x-[30px] ml-9">
              <label>RFC</label>
              <input
                type="text"
                name="rfc"
                placeholder="Ingresa tu rfc"
                onChange={handleInputChange}
                value={formValues.rfc}
                disabled={deshabilitar}
                className="rounded-md border-2 w-[350px]  py-3 px-6 text-base font-medium text-black outline-none  focus:shadow-md  border-black "
              />
            </section>
            <section className="space-x-[30px] mr-5">
              <label>Telefono</label>
              <input
                type="text"
                name="telefono"
                placeholder="Ingresa tu telefono"
                onChange={handleInputChange}
                value={formValues.telefono}
                disabled={deshabilitar}
                className="rounded-md border-2 w-[350px] py-3 px-6 text-base font-medium text-black outline-none  focus:shadow-md  border-black "
              />
            </section>
            <section className="space-x-[30px]  ml-[5px]">
              <label>Correo</label>
              <input
                type="email"
                name="correo"
                placeholder="Ingresa tu correo electronico"
                onChange={handleInputChange}
                value={formValues.correo}
                disabled={deshabilitar}
                className="rounded-md border-2 w-[350px]  py-3 px-6 text-base font-medium text-black outline-none  focus:shadow-md  border-black "
              />
            </section>
            <div className="flex flex-row  font-mono font-medium space-x-10 ml-[100px]">
              <button
                className="rounded-[5px] bg-red-500 h-[30px] w-[100px] flex justify-center items-center text-white text-xl hover:bg-red-600 "
                onClick={cancelarModificar}
              >
                Cancelar
              </button>
              <button
                className="rounded-[5px] bg-green-800  h-[30px] w-[110px] flex justify-center items-center text-white text-xl hover:bg-green-900 disabled:bg-gray-400 disabled:cursor-not-allowed"
                onClick={handleSubmit}
                disabled={deshabilitar}
              >
                Modificar
              </button>
            </div>
            {mostrarModal &&
              (modificado ? (
                <Modal
                  mensaje="Se ha modificado el cliente"
                  color="green-600"
                  cerrarModal={cerrarModal}
                />
              ) : (
                <Modal
                  mensaje="No se pudo modificar el cliente"
                  color="red-600"
                  cerrarModal={cerrarModal}
                />
              ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default ModificarCliente;
