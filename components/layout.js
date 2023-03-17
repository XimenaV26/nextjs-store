import Head from "next/head";
import style from "../styles/layout.module.css";
import Menu from "./menu";
import ShoppingCart from "./shoppingCart";
import { useRouter } from "next/router";
import en from "@/en";
import es from "@/es";

export default function Layout({ children, title, description }) {
  const { asPath, locale, locales } = useRouter();
  const t = locale === "en" ? en : es;
  return (
    <div>
      <Head>
        <title>Next store {title ? `| ${title}` : ""}</title>
        <meta name="description" content={`${t.seo.des}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={`${title}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />

      <div className={style.container}>{children}</div>
      <ShoppingCart />
    </div>
  );
}
