import { redirect } from "next/navigation";

// The proxy already routes a signed-in visitor to /:role/dashboard before this
// renders; reaching here means there's no usable session.
export default function Home() {
  redirect("/auth/login");
}
