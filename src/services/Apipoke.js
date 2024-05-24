import axios from "axios";

const apipoke = axios.create({
    baseURL: 'https://pokebuildapi.fr/api/v1',

});

export default apipoke