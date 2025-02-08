import React from "react";

const page = () => {
  return <div>page</div>;
};

export default page;

// "use client";

// import { useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { getOrders } from "@/database/actions/getOrders.action";

// const AdminOrdersPage = () => {
//   const [orders, setOrders] = useState([]);

//   const fetchOrders = async () => {
//     const data = await getOrders();
//     // setOrders(data);
//   };

//   fetchOrders();

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100 dark:bg-gray-900">
//       <Card className="w-full max-w-5xl p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
//         <CardHeader>
//           <CardTitle className="text-xl font-bold">Customer Orders</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Customer Name</TableHead>
//                 <TableHead>Product Name</TableHead>
//                 <TableHead>Product Price</TableHead>
//                 <TableHead>Status</TableHead>
//                 <TableHead>Created Time</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {/* {orders.map((order) => (
//                 <TableRow key={order.id}>
//                   <TableCell>{order.customerName}</TableCell>
//                   <TableCell>{order.productName}</TableCell>
//                   <TableCell>${order.productPrice}</TableCell>
//                   <TableCell>{order.status}</TableCell>
//                   <TableCell>
//                     {new Date(order.createdAt).toLocaleString()}
//                   </TableCell>
//                 </TableRow>
//               ))} */}
//             </TableBody>
//           </Table>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default AdminOrdersPage;
