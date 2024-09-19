// const studentDetailsTemplate = (students) => {
//   return `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Student Details</title>
//   <style>
//       body {
//           font-family: Arial, sans-serif;
//           background-color: #f4f4f4;
//           margin: 0;
//           padding: 20px;
//       }
//       .container {
//           background-color: #ffffff;
//           padding: 20px;
//           border-radius: 8px;
//           box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
//       }
//       h2 {
//           color: #333;
//       }
//       table {
//           width: 100%;
//           border-collapse: collapse;
//           margin-top: 20px;
//       }
//       th, td {
//           border: 1px solid #dddddd;
//           text-align: left;
//           padding: 8px;
//       }
//       th {
//           background-color: #f2f2f2;
//       }
//       .footer {
//           margin-top: 20px;
//           font-size: 12px;
//           color: #777;
//       }
//   </style>
// </head>
// <body>
//   <div class="container">
//       <h2>Student Details</h2>
//       <table>
//           <thead>
//               <tr>
//                   <th>Profile ID</th>
//                   <th>Name</th>
//                   <th>Email ID</th>
//                   <th>Mobile Number</th>
//                   <th>Role</th>
//                   <th>Designation</th>
//                   <th>First Graduate</th>
//                   <th>Category</th>
//                   <th>Current Year</th>
//               </tr>
//           </thead>
//           <tbody>
//               ${students.map(student => `
//                   <tr>
//                       <td>${student.profileId}</td>
//                       <td>${student.Name}</td>
//                       <td>${student.EmailId}</td>
//                       <td>${student.mobileNumber}</td>
//                       <td>${student.Role}</td>
//                       <td>${student.Designation}</td>
//                       <td>${student.is_FirstGraduate}</td>
//                       <td>${student.category}</td>
//                       <td>${student.currentYear}</td>
//                   </tr>
//               `).join('')}
//           </tbody>
//       </table>
//       <div class="footer">
//           <p>&copy; ${new Date().getFullYear()} Your Institution. All rights reserved.</p>
//       </div>
//   </div>
// </body>
// </html>
// `;
// };

// // Exporting the function
// module.exports = { studentDetailsTemplate };
