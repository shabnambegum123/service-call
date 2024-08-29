const template = async (result) => {
    
  var map = result.map((x, index) => {
    let htmlTemplate = `<div key={index}>
        <table>
          <tr>
            <th>SerialNo</th>
            <th>studentFeestructureId</th>
            <th>studentId</th>
            <th>Designation</th>
            <th>paidStatus</th>
            <th>pending</th>
            <th>TotalAmount</th>
            <th>fineAmount</th>
          </tr>
          <tr>
            <td>${index + 1}</td>
            <td>${x.studentFeestructureId}</td>
            <td>${x.studentId}</td>
            <td>${x.Designation}</td>
            <td>${x.paidStatus}</td>
            <td>${x.TotalAmountd}</td>
            <td>${x.fineAmount}</td>
          </tr>
        </table>
      </div>`;

    return htmlTemplate;
  });
  return map;
};

module.exports = { template };
