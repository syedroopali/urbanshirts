import { auth } from "@/auth";
import { AddProductForm } from "@/components/forms/AddProductForm";
import User from "@/database/models/user.model";

const page = async () => {
  const session = await auth();

  if (!session) {
    return (
      <p className="flex items-center justify-center w-full h-screen text-xl">
        Please login as Administrator
      </p>
    );
  }

  const user = await User.findOne({ email: session.user?.email });

  if (!user.isAdmin) {
    return (
      <p className="flex items-center justify-center w-full h-screen text-xl">
        Your are not allowed to view this page
      </p>
    );
  }

  return (
    <div className="w-full flex items-center justify-center min-h-screen py-6">
      <AddProductForm />
    </div>
  );
};

export default page;
