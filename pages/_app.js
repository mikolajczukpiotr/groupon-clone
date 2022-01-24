import { ChakraProvider } from "@chakra-ui/react";
import "tailwindcss/tailwind.css";
import Home from "./index";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
export default MyApp;
