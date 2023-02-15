import type { AppProps } from "next/app";
import { Roboto } from "@next/font/google";
import { globalStyles } from "@/styles/global";

import logoImg from "@/assets/logo.svg";
import Image from "next/image";
import { Container, Header } from "@/styles/pages/app";
import Link from "next/link";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container className={roboto.className}>
      <Header>
        <Link href="/">
          <Image src={logoImg} alt="" width={120} height={40} />
        </Link>
      </Header>

      <Component {...pageProps} />
    </Container>
  );
}
