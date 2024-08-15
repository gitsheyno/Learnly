"use server";
import { redirect } from "next/navigation";
import { sendReceiptToUser } from "./bookingRecipt";

type User = {
  id: string;
  createdAt: string;
  email: string;
};
//TODO write in db and send for tutor and redirect to the dashboard and update  user dashboard
export const bookTutor = async (user: User, id: string, formData: FormData) => {
  console.log("form", formData);
  console.log("id", id);
  console.log("user", user);

  await sendReceiptToUser("new course is added to your list");

  if (id && formData) {
    redirect("/");
  }
};
