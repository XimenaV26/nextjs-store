import "../styles/globals.css";
import StateWrapper from "@/components/stateWrapper";

export default function App({ Component, pageProps }) {
  return (
    <StateWrapper>
      <Component {...pageProps} />
    </StateWrapper>
  );
}
