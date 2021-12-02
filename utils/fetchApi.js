import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

//fetch data from the API
export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "270ca38192msh789b60a635b175dp122ff0jsn938fe7482459",
    },
  });

  return data;
};
