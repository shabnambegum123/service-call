
const cron = require('node-cron');
const { transporter } = require('./Email');
const {studentDetailsTemplate} = require("./management")
  
const sendEmail = async (data) => {
 
  try {
    const info = await transporter.sendMail({
      from: 'galaxy08102001@gmail.com', 
      to: 'shabnambegum227@gmail.com', 
      subject: 'node js', 
       html: studentDetailsTemplate(data), 
    });
    console.log('Email sent:', info.response)
  } catch (error) {
    console.error('Error sending email:', error)
  }
}
// cron.schedule('49 13 * * *', () => {
//   console.log('Email Sent');
//   sendEmail()
//     .then(() => console.log('Email sent successfully'))
//     .catch(error => console.error('Error sending email:', error));
// });

module.exports = { sendEmail }
