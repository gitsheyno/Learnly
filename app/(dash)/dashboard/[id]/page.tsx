import React from "react";
import Booking from "component/Booking";
import { getCurrentUser } from "@/utils";
import { getOneTutor } from "@/utils";

type TutorCard = {
  category?: string;
  image: string;
  name: string;
  language: string;
  students: string;
  lessons: string;
  speakLang: string;
  benefit: string;
  cost: string;
  session: string;
};
type User = {
  id: string;
  createdAt: string;
  email: string;
};
export default async function BookingPage({
  params,
}: {
  params: { id: string };
}) {
  const user = await getCurrentUser();
  const tutor: TutorCard | undefined = await getOneTutor(params.id);

  return (
    <div>
      <Booking data={tutor} id={params.id} user={user as User} />
    </div>
  );
}
