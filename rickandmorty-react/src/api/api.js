import useFetch from "../hooks/useFetch";

const baseUrl = 'http://127.0.0.1:8000/api';

const routes = {
  getCharacters: () => `${baseUrl}/characters`,
  storeCharacter: () => `${baseUrl}/characters`,
};

export const useApi = ({action, urlParams, method, payload, url}, executeOnMount) => {  
  return useFetch({
    url: action ? routes[action](urlParams) : url,
    method,
    payload,
  }, executeOnMount);
};