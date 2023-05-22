import { useNavigate } from "react-router-dom";
import { agregar } from "../services/Cliente";
import { useState } from "react";
import Modal from "./ModalAviso";

let agregado;

function AgregarCliente() {
  const navigate = useNavigate();
  const [mostrarModal, setmostrarModal] = useState(false);

  const [formValues, setFormValues] = useState({
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

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const data = await agregar(
      formValues.nombre,
      formValues.apellidoPaterno,
      formValues.apellidoMaterno,
      formValues.rfc,
      formValues.telefono,
      formValues.correo
    );

    if (data) {
      setmostrarModal(true);
      agregado=true;
    }else{
      agregado=false;
    }
    console.log(data);
  };

  const cancelarAgregar = () => {
    navigate("/");
  };

  const cerrarModal = () => {
    setmostrarModal(false);
    navigate("/");
  };

  return (
    <>
      <main className="bg-black w-screen h-screen absolute">
        <section className="bg-white flex flex-col rounded-[10px] items-center  ml-[400px] mt-[100px] w-[800px] h-auto ">
          <h1 className="font-semibold font-mono text-[30px] mt-2">
            Agregar Cliente
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col w-full items-center font-mono text-[20px] space-y-[20px] mt-[55px]">
              <section className="space-x-[30px]">
                <label>Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  placeholder="Ingresa tu nombre"
                  onChange={handleInputChange}
                  value={formValues.nombre}
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
                  className="rounded-md border-2 w-[350px]  py-3 px-6 text-base font-medium text-black outline-none  focus:shadow-md  border-black "
                />
              </section>
            </div>

            <div className="flex flex-row mt-8 mb-5 font-mono font-medium space-x-10 ml-[100px]">
              <button
                className="rounded-[5px] bg-red-500 h-[30px] w-[100px] flex justify-center items-center text-white text-xl hover:bg-red-600 "
                onClick={cancelarAgregar}
              >
                Cancelar
              </button>
              <button className="rounded-[5px] bg-green-800  h-[30px] w-[100px] flex justify-center items-center text-white text-xl hover:bg-green-900">
                Agregar
              </button>
            </div>
          </form>
          {mostrarModal &&
              (agregado ? (
                <Modal
                  mensaje="Se ha agregado el cliente"
                  color="green-600"
                  cerrarModal={cerrarModal}
                />
              ) : (
                <Modal
                  mensaje="No se pudo agregar  el cliente"
                  color="red-600"
                  cerrarModal={cerrarModal}
                />
              ))}
        </section>
      </main>
    </>
  );
}

export default AgregarCliente;
