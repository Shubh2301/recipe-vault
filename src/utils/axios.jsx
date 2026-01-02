import axios from "axios";

const  instance=axios.create({
    baseURL: "https://fakestoreapi.com/products",
})

instance.interceptors.request.use(
    function(config){
        console.log(config);
        
        return config
    },
    function(error){
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    function(response){
        return response;
        console.log(response);
        
    },
    function(error){
        return Promise.reject(error)
    }
)

export default instance;