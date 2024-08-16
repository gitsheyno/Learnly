"use server";
import { getCurrentUser } from "@/utils/users";
import { revalidateTag } from "next/cache";
import { addFavorite } from "@/utils/getTutors";

export const addFavoriteTutor = async (tutorId: string) => {
  const user = await getCurrentUser();

  await addFavorite(tutorId, user?.id as string);

  revalidateTag("dashboard:favorite");
  revalidateTag("favorite");
};
