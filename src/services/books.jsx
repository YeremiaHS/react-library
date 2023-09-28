import { fetchApi } from "../config/api";

const BASE_API_URL_DEV = import.meta.env.VITE_API_URL_DEV;

export const getBookService = async() => {
    try {
        const url = `${BASE_API_URL_DEV}/books/available`;
        const response = await fetchApi({url,  method:"GET"});

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

export const getBookByIdService = async() => {
    try {
        const Url = `${BASE_API_URL_DEV}/books/id`;
        const response = await fetchApi({url, method:"GET"});

        return response;
    } catch (error) {
        console.log(error);
    }
}