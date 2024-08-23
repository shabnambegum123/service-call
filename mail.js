const nodemailer = require("nodemailer");
const schedule = require('node-schedule')
const sendMail = async (mail, result) => {
  var transtorter = await nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "shabnambegum1511@gmail.com",
      pass: "mzos kxfh gxkd nqln",
    },
  });

  result = JSON.stringify(result);

  var mailOptions = {
    from: "shabnambegum1511@gmail.com",
    to: mail,
    subject: "sending mail using node js",
    text: result,
  };

  let passMail = await transtorter.sendMail(mailOptions,);;
  if (passMail) return 'Email sent successfully';
  else return false;
};


const managementMail = async (mail, result) => {
    var transtorter = await nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "shabnambegum1511@gmail.com",
        pass: "mzos kxfh gxkd nqln",
      },
    })
  console.log(mail)
    result = JSON.stringify(result);
  
    var mailOptions = {
      from: "shabnambegum1511@gmail.com",
      to: mail,
      subject: "sending mail using node js",
      text: result,
    };
  //schedule.scheduleJob('0 18 * * *',async()=>{
    let passMail = await transtorter.sendMail(mailOptions,);;
    if (passMail) return 'Email sent successfully';
    else return false;
 // })
   
  };

  const pendingStudent = async (mail,result) =>{
    var transtorter = await nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "shabnambegum1511@gmail.com",
          pass: "mzos kxfh gxkd nqln",
        },
      });
    
      result = JSON.stringify(result);
    
      var mailOptions = {
        from: "shabnambegum1511@gmail.com",
        to: mail,
        subject: "sending mail using node js",
        text: `Requesting to pay fees \n The amount of rupees${result} only/`,
      };
    
      let passMail = await transtorter.sendMail(mailOptions,);;
      if (passMail) return 'Email sent successfully';
      else return false;
  }


module.exports = { sendMail,managementMail,pendingStudent };
