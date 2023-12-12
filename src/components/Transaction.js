// import React from "react";

// function Transaction() {
//   return (
//     <tr>
//       <td>{"your code here..."}</td>
//       <td>{"your code here..."}</td>
//       <td>{"your code here..."}</td>
//       <td>{"your code here..."}</td>
//     </tr>
//   );
// }

// export default Transaction;

import React from "react";

function Transaction({ date, description, category, amount, children }) {
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td>{children}</td>
    </tr>
  );
}

export default Transaction;