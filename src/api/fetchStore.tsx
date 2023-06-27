import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchStore = async () => {
  const response = await axios.get("https://dummyjson.com/products");
  return response.data.products;
};

export const useApiFetch = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["product"],
    queryFn: fetchStore,
    staleTime : Infinity
  });
  return { isLoading, isError, data };
};



//detail
const fetchDetail = async(id :string) => {
  const response = await axios.get(`https://dummyjson.com/products/${id}`)
  return response.data
}

export const detailApiFetch = (id : string) => {
  const {isLoading , isError , data } = useQuery({
    queryKey : ["detailsProduct"],
    queryFn : () => fetchDetail(id),
    // staleTime : Infinity,
    // cacheTime : 0/
  })
  return {isLoading,isError,data}
}


//Search
export const fetchSearch = async (query : string) => {
  const response = await axios.get(`https://dummyjson.com/products/search?q=${query}`)
  return response.data
}

export const SearchApiFetch = (query : string) => {
  const {isLoading,data,isError} = useQuery({
    queryKey : ['SearchProduct'],
    queryFn : () => fetchSearch(query)
  })
  return {isLoading,data,isError}
}
