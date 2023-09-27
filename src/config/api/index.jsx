import axios from "axios";

export const fetchApi = async ({ url, method, data}) => {
    try {
        const responseAxios = await axios({
            url, method, data
        })
    } catch (error) {
        return error.response;
    }
}