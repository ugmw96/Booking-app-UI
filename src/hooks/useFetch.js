import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"

const useFetch = (url) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

  useEffect(() => {

    const fetchData = async() => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (error) {
        setErr(error);
      }
      setLoading(false);
    }
    fetchData();
  },[url]);

  const reFetchData = async() => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (error) {
      setErr(error);
    }
    setLoading(false);
  }

  return {data, loading, err, reFetchData}
}

export default useFetch;