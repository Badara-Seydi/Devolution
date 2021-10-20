import axios from 'axios';
// on peut pré-configurer une instance d'axios
// ici on passe le baseUrl, ainsi quand on utilisera "api"
// on aura pas besoin de préciser cette valeur de baseUrl
const instance = axios.create({
  baseURL: 'https://devolution-api.herokuapp.com/api/v1/',
});

export default instance;
