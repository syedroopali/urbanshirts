import Link from "next/link";
import { Button } from "@/components/ui/button";

const AdminDashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-2 sm:p-6 bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <div className="flex flex-col gap-4">
          <Link href="/admin/add-product">
            <Button className="w-full">Add Product</Button>
          </Link>
          <Link href="/admin/orders">
            <Button className="w-full">View Orders</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
