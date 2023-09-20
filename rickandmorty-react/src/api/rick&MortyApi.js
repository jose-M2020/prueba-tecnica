import useFetch from "../hooks/useFetch";

const baseUrl = 'https://rickandmortyapi.com/api';

const routes = {
  getLocationById: ({id}) => `${baseUrl}/location/${id}`,
};

export const useRickMortyApi = ({action, urlParams, method, payload, url}, executeOnMount) => {  
  return useFetch({
    url: action ? routes[action](urlParams) : url,
    method,
    payload,
  }, executeOnMount);
};