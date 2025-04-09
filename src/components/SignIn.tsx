import { signIn } from "../../auth";

export function SignIn() {
  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signIn("github");
        }}
      >
        <h2>sign in</h2>
        <button className="bg-white text-black" type="submit">
          sign in with github
        </button>
      </form>
    </div>
  );
}
