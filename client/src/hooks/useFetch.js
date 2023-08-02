import axios from "axios"
import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await axios.get(url);
                setData(res.data);
            } catch (error) {
                console.log("Error: ", error);
            }
            setLoading(false);
        }
        fetchData();
    },[url]);
    return { data, loading };
}

export default useFetch;