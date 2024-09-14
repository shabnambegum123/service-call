const sequelize = require("../database")

const notificationTable = require("./NotificationTable")

sequelize.sync({force:false}).then(()=>{console.log("connected")}).catch((error)=>{console.log(error)})

module.exports = sequelize