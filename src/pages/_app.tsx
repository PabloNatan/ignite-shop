import type { AppProps } from "next/app";
import { Roboto } from "@next/font/google";
import { globalStyles } from "@/styles/global";

import logoImg from "@/assets/logo.svg";
import Image from "next/image";
import { Container, Header } from "@/styles/pages/app";
import Link from "next/link";
import NextProgress from "next-progress";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextProgress
        delay={300}
        options={{ showSpinner: true }}
        color="#00b37e"
      />
      <Container className={roboto.className}>
        <Header>
          <Link href="/">
            <Image src={logoImg} alt="" width={120} height={40} />
          </Link>
        </Header>

        <Component {...pageProps} />
      </Container>
    </>
  );
}
