import axios from "axios"

const api = axios.create({
    //Observação:
    //A api online entra em stand by quando não utilizada
    //demorando até um minuto para ficar online novamente quando acessada

    //API Online
    baseURL:'https://av4-react-api.onrender.com/v1'

    //API Local
    // baseURL:'http://127.0.0.1:8000/v1'
})
export default api
