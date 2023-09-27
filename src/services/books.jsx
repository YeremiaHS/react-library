import { fetchApi } from "../config/api";

const BASE_API_URL_DEV = import.meta.env.VITE_API_URL_DEV;

export const getBooks = async() => {
    try {
        const url = `${BASE_API_URL_DEV}/available`;
        const response = await fetchApi({url, method:"GET"});

        if (response.status !== 200) {
            const error = {
                status : true,
                message : "Failed to get data",
            }
            return error;
        }

        return response;
    } catch (error) {
        console.log(error);
    }
};