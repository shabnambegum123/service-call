

const  axiosMethod = async () =>{
    method= 'POST',
    url= process.env.notificationService + "/axios/url",
    headers= {
      contentType: 'application/json',
      authorization: `token`
    },
    data =  {}
    return {method,url,headers}
  }

  module.exports = {axiosMethod}
  