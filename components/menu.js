import Link from "next/link";
import style from "../styles/menu.module.css";
import { useAppContext } from "./stateWrapper";
import { useRouter } from "next/router";
import en from "@/en";
import es from "@/es";
import Selector from "./selector";

export default function Menu() {
  const { asPath, locale, locales } = useRouter();
  const t = locale === "en" ? en : es;

  const cart = useAppContext();
  function handleOpenCart() {
    cart.openCart();
  }

  return (
    <nav className={style.menu}>
      <div>
        <Selector />
      </div>
      <div>
        <Link className={style.link} href="/">
          {t.menu.home}
        </Link>
        <Link className={style.link} href="/store">
          {t.menu.store}
        </Link>
        <Link className={style.link} href="/faq">
          {t.menu.faq}
        </Link>
      </div>
      <div>
        <a className={style.link} onClick={handleOpenCart} href="#">
          {" "}
          {t.menu.cart} ({cart.getNumberOfItems()})
        </a>
      </div>
    </nav>
  );
}
