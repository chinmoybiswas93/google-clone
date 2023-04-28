import Header from "@/components/Header";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Header></Header>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
