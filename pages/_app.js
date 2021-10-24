import { ChakraProvider } from "@chakra-ui/react"
import "tailwindcss/tailwind.css"
import Home from "./index";
function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider>
            <Home {...pageProps} />
        </ChakraProvider>
    )
}
export default MyApp