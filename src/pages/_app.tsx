import "../app/globals.scss";
import { Provider } from "react-redux";
import TopNavigation from "@/app/components/TopNavigation/TopNavigation";
import { store } from "@/app/store";
interface AppProps {
  Component: React.ComponentType<any>; // Adjust the type as per your component's props
  pageProps: any; // Replace 'any' with the appropriate type for pageProps
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <TopNavigation />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
