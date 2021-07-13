import http from './httpCommon';

const GIT_URL = "https://api.github.com/orgs/rocketseat-education/repos";

//https://api.github.com/users/DiegoCanedo/repos

const listarRepositorios = () => {
    return http.get(GIT_URL);
};

export default {
    listarRepositorios,
}