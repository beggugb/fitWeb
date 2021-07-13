import { authHeader, apiErp } from "../helpers";

export const crudService = {
  /*GET*/
  getList,
  getLis,
  getData,
  getItem,  
  /*POST*/
  postList,
  createList,  
  createUnit,
  searchList,
  /*PUT*/
  putList,
  putUnit,
  /*DELETE*/
  deleteList  
};

function getData(payload, page,num,prop,orden) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  return fetch(`${apiErp}/${payload}/listas/${page}/${num}/${prop}/${orden}`, requestOptions).then(handleResponse);
}

function getList(payload, dato) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  return fetch(`${apiErp}/${payload}/lista/${dato}`, requestOptions).then(handleResponse);
}

function getLis(payload) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  return fetch(`${apiErp}/${payload}/lista`, requestOptions).then(handleResponse);
}

function getItem(payload, pky) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  return fetch(`${apiErp}/${payload}/${pky}`, requestOptions).then(handleResponse);
}

function postList(payload, dato) {
  const requestOptions = {
    method: "POST",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(dato),
  };

  return fetch(`${apiErp}/${payload}/lista`, requestOptions).then(handleResponse);
}

function createList(payload, dato) {
  const requestOptions = {
    method: "POST",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(dato),
  };

  return fetch(`${apiErp}/${payload}`, requestOptions).then(handleResponse);
}

function createUnit(payload, dato) {
  const requestOptions = {
    method: "POST",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(dato),
  };

  return fetch(`${apiErp}/${payload}/registro`, requestOptions).then(handleResponse);
}

function searchList(payload, dato) {  
  const requestOptions = {
    method: "POST",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(dato),
  };

  return fetch(`${apiErp}/${payload}/search`, requestOptions).then(handleResponse);
}

function putList(payload, dato) {
  const requestOptions = {
    method: "PUT",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(dato),
  };
  return fetch(`${apiErp}/${payload}/${dato.id}`, requestOptions).then(
    handleResponse
  );
}

function putUnit(payload, dato) {
  const requestOptions = {
    method: "PUT",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(dato),
  };
  return fetch(`${apiErp}/${payload}/${dato.id}`, requestOptions).then(
    handleResponse
  );
}

function deleteList(payload, pky) {
  const requestOptions = {
    method: "DELETE",
    headers: authHeader(),
  };
  return fetch(`${apiErp}/${payload}/${pky}`, requestOptions).then(handleResponse);
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
