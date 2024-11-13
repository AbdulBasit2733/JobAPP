import { useState, useEffect } from "react";
import axios from "axios";
// import { RAPID_API_KEY } from "@env";
const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
      ...query,
    },
    headers: {
      "x-rapidapi-key": "0e952af56dmsh4242d013c8ec3fap122c83jsn8fbd5e871367",
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const resposne = await axios.request(options);
      setData(resposne.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("There is an error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData()
  },[])

  const reFetch = () => {
    setIsLoading(true);
    fetchData()
  } 
  return {data, isLoading, error, reFetch}

};

export default useFetch
