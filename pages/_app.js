import "../styles/globals.css";
import { LayoutGroup } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <LayoutGroup>
      <Component {...pageProps} />{" "}
    </LayoutGroup>
  );
}

export default MyApp;
