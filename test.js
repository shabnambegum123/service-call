const nodemailer = require("nodemailer");

const fs = require("fs");
const path = require("path");
 const hbs = require("hbs");
// Create Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "Gmail", // Use your email service
  auth: {
    user: process.env.userMail,
    pass: process.env.userPassword,
  },
});

// Compile HBS template
const compileTemplate = (context) => {
  const templatePath = path.join(__dirname, 'file.hbs');
  const templateSource = fs.readFileSync(templatePath, "utf-8");
  const template = hbs.compile(templateSource);
  return template(context);
};

// Send email function
const sendEmail = async (to, subject, context) => {
  const html = compileTemplate("emailTemplate", { ...context, subject });


  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "galaxy08102001@gmail.com",
      pass:"qksk poco lxlr kggz", // or the app password
    },
  })
  
  const mailOptions = {
    from: process.env.userMail,
    to,
    subject,
    html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email Sent: " + info.response);
  } catch (error) {
    console.error("Error sending email:", error.message);
  }
};

// Example usage
const context = {
    ProfileID: 1,
    Name: "hello",
    Designation:"BSC",
    CurrentYear:"firstYear"
};

sendEmail("shabnambegum227@gmail.com", "Test Email", context);
