import NavDetail from "./NavDetails";
import { getCurrentUser } from "@/utils/users";
export default async function Nav() {
  const user = await getCurrentUser();

  const isAuthenticated = user ? true : false
  console.log(isAuthenticated , 'is auth ')
  return <NavDetail isAuthenticated={isAuthenticated}  />;
}
