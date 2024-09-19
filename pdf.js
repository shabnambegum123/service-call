const generateHTMLContent = (profile) => {
  let profileId = profile.profileId;
  let Name = profile.Name;
  let Designation = profile.Designation;
  let currentYear = profile.currentYear;
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Profile Information</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      border: 1px solid #ccc;
      padding: 20px;
      border-radius: 8px;
    }
    h1 {
      text-align: center;
    }
    .profile-info {
      margin: 20px 0;
    }
    .profile-info div {
      margin-bottom: 10px;
    }
    .profile-info div label {
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Profile Information</h1>
    <div class="profile-info">
      <div><label>Profile ID:</label> ${profileId}</div>
      <div><label>Name:</label> ${Name}</div>
      <div><label>Designation:</label> ${Designation}</div>
      <div><label>Current Year:</label> ${currentYear}</div>
    </div>
  </div>
</body>
</html>
  `;
};

module.exports = { generateHTMLContent };



