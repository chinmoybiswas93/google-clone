import { signIn } from "next-auth/react";

export default function SignIn() {
  const handleSignIn = (e) => {
    e.preventDefault();
    signIn("google", { callbackUrl: "/" });
  };

  return (
    <div className="min-h-[100vh] flex items-center text-center">
      <div className="container mx-auto flex flex-col items-center gap-8">
        <div className="max-w-[300px]">
          <img src="/logo.png" alt="" className="w-full" />
          <p><i>This logo is used used for learning purpose</i></p>
        </div>
        <button className="border py-3 px-5 rounded text-white bg-blue-400 hover:bg-gray-600" onClick={handleSignIn}>Sign in with Google</button>
      </div>
    </div>
  );
}
