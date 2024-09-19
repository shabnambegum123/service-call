const { default: axios, all } = require("axios");
const { axiosMethod } = require("./AxiosMethod");
const { AxiosCreate } = require("./axiosCreate");
const axiosFunction = async function (data) {
  const Api = await axiosMethod(data.token);
  Api.data = data;
    
  const getData = await AxiosCreate(Api);

  if (getData) return getData;
  else {
    return "something Went wrong";
  }
};

module.exports = { axiosFunction };
