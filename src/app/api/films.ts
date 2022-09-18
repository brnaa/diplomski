import axios from "axios";

const api = 'https://ghibliapi.herokuapp.com/'

export const getFilms = () => {
  return axios.get(api + "films")
  .then((res) => {
    return res
  })
};