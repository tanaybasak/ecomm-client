import { useEffect, useState } from "react";
import { fetchDataFromApi } from '../utils/api';

const useFetch = (endpoint) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const makeApiCall = async () => {
            const res = await fetchDataFromApi(endpoint);
            const { data } = res.data;

            setData(data);
        }
     makeApiCall();
    }, [endpoint])


console.log(data);
    return data;
}

export default useFetch;