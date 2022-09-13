// import React, { Fragment } from "react";
// import Accordion from "./Accordion";

// import { accordionData } from "./OrdersData";

// export default function NewOrders() {
//   return (
//     <div className="page-content">
//       <div className="container">
//       <div className="row search-box mb-3">
//           <h4 className="">Reports</h4>
//         </div>
//         <div className="row mt-2">
//           <div className="accordion">
//             {accordionData.map((value, content) => {
//               return (
//                 <Fragment key={content}>
               
//                   <Accordion
//                     SNo={value.SNo}
//                     Address={value.Address}
//                     title={value.title}
//                     OrderNo={value.OrderNo}
//                     Price={value.Price}
//                     Date={value.Date}
//                     MRF={value.MRF}
//                     Weight={value.Weight}
//                     Name={value.Name}
//                     ProductName={value.ProductName}
//                     ProductImage={value.ProductImage}
//                     Des={value.Des}
//                   />
//                 </Fragment>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import ComingSoon from '../../components/ComingSoon'

function Reports() {
  return (
    <div>
    <ComingSoon />

    </div>
  )
}

export default Reports
