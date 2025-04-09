import { SignIn } from "@/components/SignIn";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";
export default async function SignInPage() {
  const session = await auth();
  if (session?.user) redirect("/");
  return (
    <div>
      <SignIn></SignIn>
    </div>
  );
}
