import useFetch from "../hooks/useFetch";

const baseUrl = 'http://127.0.0.1:8000/api';

const routes = {
  getCharacters: {
    path: () => `${baseUrl}/characters`,
  },
  storeCharacter: {
    path: () => `${baseUrl}/characters`,
    method: 'post'
  }
};

export const useApi = ({action, urlParams, payload, url}, executeOnMount) => {  
  const route = routes[action];

  return useFetch({
    url: action ? route.path(urlParams) : url,
    method: route?.method,
    payload,
  }, executeOnMount);
};