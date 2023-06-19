import { Layout } from "../components";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "../styles/globals.css";
// import "@/styles/design_tokens.css";
import { Lato } from "next/font/google";

const lato = Lato({
  weight: ["100", "300", "400"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={lato.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
