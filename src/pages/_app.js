import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
      <ChakraProvider
        // theme={CHAKRA_THEME}
        // colorModeManager={colorModeManager}
        toastOptions={{ defaultOptions: { position: "top-right" } }}
      >
        {getLayout(<Component {...pageProps} />)}
      </ChakraProvider>
  )
}
