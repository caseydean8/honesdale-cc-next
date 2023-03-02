import { useEffect, useState } from "react";
import { Layout } from "@/components";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@/styles/globals.css";
import { Lato } from "@next/font/google";

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
