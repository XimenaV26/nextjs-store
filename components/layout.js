import Head from "next/head";
import style from "../styles/layout.module.css";
import Menu from "./menu";
import ShoppingCart from "./shoppingCart";
export default function Layout({ children, title, description }) {
  return (
    <div>
      <Head>
        <title>Next store {title ? `| ${title}` : ""}</title>
        <meta name="description" content="Store with Next merch" />
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
