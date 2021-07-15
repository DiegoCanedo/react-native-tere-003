import http from './httpCommon';

const GIT_URL = "https://api.github.com/orgs/rocketseat-education/repos";

//https://api.github.com/users/DiegoCanedo/repos

// const listarID = (id) => {
//     return http.get(`${ULR_PRODUTO}/${id}`);
//   };
  
//   const incluir = (data) => {
//     return http.post(ULR_PRODUTO, data);
//   };
  
//   const atualizar = (id, data) => {
//     return http.put(`${ULR_PRODUTO}/${id}`, data);
//   };
  
//   const deletar = (id) => {
//     return http.delete(`${ULR_PRODUTO}/${id}`);
//   };

const listarRepositorios = () => {
    return http.get(GIT_URL);
};

export default {
    listarRepositorios,
}