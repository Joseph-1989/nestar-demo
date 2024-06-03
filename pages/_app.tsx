import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  console.log("_app.tsx component - PAGES ROUTER");
  return <Component {...pageProps} />;
}
