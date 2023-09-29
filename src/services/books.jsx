import { fetchApi } from "../config/api";

const BASE_API_URL_DEV = import.meta.env.VITE_API_URL_DEV;

// get all book
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

// get book by id
export const getBookByIdService = async(id) => {
    try {
        const url = `${BASE_API_URL_DEV}/books/${id}`;
        const response = await fetchApi({url, method:"GET"});

        return response;
    } catch (error) {
        console.log(error);
    }
}

//  add book 
export const addBookService = async(data) => {
    try {
        const url = `${BASE_API_URL_DEV}/books/add`;
        const response = await fetchApi({ url, method:"POST", data});

        return response;
    } catch (error) {
        console.log(error);
    }
}

// update book
export const updateBookService = async (id, data) => {
    try {
        const url = `${BASE_API_URL_DEV}/books/update/${id}`
        const response = await fetchApi({url, method:"PUT", data})

        return response;
    } catch (error) {
        console.log(error);
    }
}

// delete book
export const deleteBookService = async(id) => {
    try {
        const url = `${BASE_API_URL_DEV}/books/${id}`
        const response = await fetchApi({url, method:"DELETE"});

        return response;
    } catch (error) {
        console.log(error);
    }
}