import axios from "axios";

const api = axios.create({
  baseURL: "http://api.tvmaze.com/"
});

const getSeries = name => {
  return api
    .get(`/singlesearch/shows?q=${name}`)
    .then(response => response.data);
};

const getLastEpisode = id => {
  return api.get(`/episodes/${id}`).then(response => response.data);
};

export default {
  getSeries,
  getLastEpisode
};
