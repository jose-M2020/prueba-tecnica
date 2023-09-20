import { useEffect, useRef, useState } from "react";

const useFetch = ({url, method, payload}, executeOnMount = true) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const controllerRef = useRef(new AbortController());

  const abort = () => {
    controllerRef.current.abort();
  };

  const execute = async (body) => {
    try {
      setLoading(true);
      const res = await fetch(url, {
        method,
        body: JSON.stringify(body),
        signal: controllerRef.current.signal
      });

      const json = await res.json();
      setData(json);

      setLoading(false);
      return json;
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  
  useEffect(() => {
    if(executeOnMount) execute(payload);
  }, []);

  return { data, error, loading, execute, abort };
};

export default useFetch;