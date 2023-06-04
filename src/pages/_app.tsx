import "../app/globals.scss";
import TopNavigation from "@/app/components/TopNavigation/TopNavigation";
import { ReactNode } from "react";

interface AppProps {
  Component: React.ComponentType<any>; // Adjust the type as per your component's props
  pageProps: any; // Replace 'any' with the appropriate type for pageProps
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <TopNavigation />
      <Component {...pageProps} />
    </>
  );
}
