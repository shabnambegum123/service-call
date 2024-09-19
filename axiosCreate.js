const axios = require("axios");

const AxiosCreate = async (data) => {
  try {
    const createD = await axios({
      method: data.method,
      url: data.url,

      data: {
        data: data,
      },
    });

    if (createD) {
     return {
        status: true,
        data: createD,
      };
    } else {
      return {
        status: false,
        data: createD,
      };
    }
  } catch (error) {
    console.log("dvqwef", error.message);
  }
};



module.exports =  {AxiosCreate} ;
