import { authHeader, apiErp } from "../helpers";

export const tpvService = {
  getArticulos,
  getCategorias,
  pagar
};

function pagar(dato) {
  const requestOptions = {
    method: "POST",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(dato),
  };

  return fetch(`${apiErp}/ventas`, requestOptions).then(handleResponse);
}

function getCategorias() {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),  
  };
  return fetch(`${apiErp}/categorias/lista`, requestOptions).then(handleResponse);
}

function getArticulos(pagina,num,dato) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),  
  };
  return fetch(`${apiErp}/tpv/listas/${pagina}/${num}/${dato}`, requestOptions).then(handleResponse);
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
