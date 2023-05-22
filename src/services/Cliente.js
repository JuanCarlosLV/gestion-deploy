import { supabase } from "../Supabase/Connection";

const agregarCliente = "addcliente";
const eliminarCliente = "deletecliente";
const modificarCliente = "updatecliente";
const listarClientes = "getallclientes";
const buscarCliente = "searchcliente";

export const agregar = async (
  nombre,
  apellidoP,
  apellidoM,
  rfc,
  telefono,
  correo
) => {
  const { data, error } = await supabase.rpc(agregarCliente, {
    nombre: nombre,
    apellidopat: apellidoP,
    apellidomat: apellidoM,
    rfc: rfc,
    correo: correo,
    telefono: telefono,
  });

  if (error) console.log(error);
  return data;
};

export const modificar = async (
  id,
  nombre,
  apellidoP,
  apellidoM,
  rfc,
  telefono,
  correo
) => {
  const { data, error } = await supabase.rpc(modificarCliente, {
    id_cliente: id,
    nuevo_nombre: nombre,
    nuevo_apellidopat: apellidoP,
    nuevo_apellidomat: apellidoM,
    nuevo_rfc: rfc,
    nuevo_correo: correo,
    nuevo_telefono: telefono,
  });
  if (error) console.log(error);
  return data;
};

export const eliminar = async (id) => {
  const { data, error } = await supabase.rpc(eliminarCliente, {
    id_cliente: id,
  });
  if (error) console.log(error);
  return data;
};

export const buscar = async (id) => {
  const { data, error } = await supabase
    .rpc(buscarCliente, {
      id_cliente: id,
    })
    .single();

  if (error) console.log(error);
  return data;
};

export const mostrarClientes = async () => {
  const { data, error } = await supabase.rpc(listarClientes);
  console.log(data)
  if (error) console.log(error);
  return data;
};
