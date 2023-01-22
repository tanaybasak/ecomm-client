import axios from 'axios';

const params = {
    headers: {
        Authorization: `Bearer ` + process.env.REACT_APP_STRIPE_APP_KEY
    }
};



export const fetchDataFromApi = async (url) => {
    try {
        return axios.get(process.env.REACT_APP_DEV_URL + url, params);

    } catch (error) {
        console.log(error);
    }
}


export const makePaymentRequest = axios.create({
    baseURL: process.env.REACT_APP_DEV_URL,
    headers: {
        Authorization: 'Bearer ' + process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
    }
})