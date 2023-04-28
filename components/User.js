import { signIn, signOut, useSession } from "next-auth/react";

export default function User() {
  const { data: session } = useSession();

  if (session) {
    const { name, email, image } = session?.user;
    return (
      <button
        className="border rounded-full hover:bg-gray-400"
        onClick={() => signOut()}
      >
        <img src={image} alt="user image" className="rounded-full w-8" />
      </button>
    );
  }
  return (
    <p>
      <button
        className="rounded py-1 px-3 text-white bg-blue-400 hover:bg-gray-600"
        onClick={() => signIn()}
      >
        Sign In
      </button>
    </p>
  );
}
