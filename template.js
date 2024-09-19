const emailTemplate = (profile) => { 
   
       let studentId = profile[0].studentId
       let Designation = profile[0].Designation
       let Year = profile[0].year
       let TotalAmount = profile[0].TotalAmount
       let paidStatus = profile[0].paidStatus
       let fineAmount = profile[0].fineAmount
    return`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fee Payment Reminder</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
        }
        .container {
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        h2 {
            color: #333;
        }
        p {
            color: #555;
        }
        .footer {
            margin-top: 20px;
            font-size: 12px;
            color: #777;
        }
        .button {
            background-color: #007bff;
            color: white;
            padding: 10px 15px;
            text-decoration: none;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Reminder: Pending Fee Payment for First Year BSC</h2>
        <p>Dear [Student's Name/Parent's Name],</p>
        <p>We hope this message finds you well.</p>
        <p>This is a reminder that the payment for the first year BSC program is currently pending. Below are the details:</p>
        <ul>
            <li><strong>Student ID:</strong> ${studentId}</li>
            <li><strong>Designation:</strong> ${Designation}</li>
            <li><strong>Year:</strong> ${Year}</li>
            <li><strong>Total Amount Due:</strong> ${TotalAmount}</li>
            <li><strong>Paid Status:</strong> ${paidStatus}</li>
            <li><strong>Fine Amount:</strong> ${fineAmount}</li>
        </ul>
        <p>As the deadline for payment approaches, we encourage you to complete the payment to avoid any late fees or disruptions in your enrollment. If you have already made the payment or have any questions, please do not hesitate to reach out.</p>
        <p>Thank you for your attention to this matter.</p>
        <p>Best regards,</p>
        <p>[Your Name]<br>
           [Your Position]<br>
           [Your Institution]<br>
           [Contact Information]<br>
           [Institution’s Address]</p>
        <div class="footer">
            <p>&copy; [Year] [Your Institution]. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`;
}

console.log(emailTemplate)
module.exports = {emailTemplate}


