import { apiErp } from "../helpers";
export const userService = {  
  login,
  logout  
};
function login(usuario) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario),
  };

  return fetch(`${apiErp}/usuarios/login`, requestOptions)
    .then(handleResponse)
    .then((response) => {                  
      if(response.user.usuario){
        localStorage.setItem("user", JSON.stringify(response.user.usuario));
        localStorage.setItem("token", JSON.stringify(response.user.token));
        localStorage.setItem("items", JSON.stringify(response.modulos));
      }    
      return response;
    });
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        //location.reload(true);
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

function logout() {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  localStorage.removeItem("items");
}
