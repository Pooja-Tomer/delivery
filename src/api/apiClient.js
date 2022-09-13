import axios from "axios";

const PostApi = async (apiurl, params) => {
  // console.log(apiurl);
  return axios
    .post(apiurl, params)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      if (error.message) {
        return error.message;
      } else {
        return "failed to fetch";
      }
    });
};

// 24/06/2022 -modal assign
const GetApi = async (apiurl) => {
  // console.log("brand api" + apiurl);
  return axios
    .get(apiurl)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      if (error.message) {
        return error.message;
      } else {
        return "failed to fetch";
      }
    });
};


export const ApiClient = {
  PostApi,GetApi
};
