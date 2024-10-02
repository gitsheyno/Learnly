import NavDetail from "./NavDetails";
import { getCurrentUser } from "@/utils";
export default async function Nav() {
  const user = await getCurrentUser();

  const isAuthenticated = user ? true : false;

  return <NavDetail isAuthenticated={isAuthenticated} />;
}
