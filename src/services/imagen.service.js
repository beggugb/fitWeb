import { authHeader, apiErp } from "../helpers";

export const imagenService = {
  uploadCliente,
  uploadCompania,
  uploadEmpresa,
  uploadArticulo
};

function uploadEmpresa(payload, dato, datoId) {
  const requestOptions = {
    method: "PUT",
    headers: { ...authHeader() },
    body: dato,
  };
  return fetch(
    `${apiErp}/${payload}/empresa/item/${datoId}`,
    requestOptions
  ).then(handleResponse);
}
function uploadCliente(payload, dato, datoId) {
  const requestOptions = {
    method: "PUT",
    headers: { ...authHeader() },
    body: dato,
  };
  return fetch(
    `${apiErp}/${payload}/cliente/item/${datoId}`,
    requestOptions
  ).then(handleResponse);
}

function uploadArticulo(payload, dato, datoId) {
  const requestOptions = {
    method: "PUT",
    headers: { ...authHeader() },
    body: dato,
  };
  return fetch(
    `${apiErp}/${payload}/articulo/item/${datoId}`,
    requestOptions
  ).then(handleResponse);
}

function uploadCompania(payload, dato, datoId) {
  const requestOptions = {
    method: "PUT",
    headers: { ...authHeader() },
    body: dato,
  };
  return fetch(
    `${apiErp}/${payload}/compania/item/${datoId}`,
    requestOptions
  ).then(handleResponse);
}


function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        // logout();
        //location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
