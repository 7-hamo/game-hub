import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"249cf9e98d4544bd8d531c586b69d3b0"
    }
})