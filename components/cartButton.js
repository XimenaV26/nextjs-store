import style from "../styles/cartButton.module.css";
import { useAppContext } from "./stateWrapper";
import { useRouter } from "next/router";
import en from "@/en";
import es from "@/es";

export default function CartButton({ item }) {
  const { asPath, locale, locales } = useRouter();
  const t = locale === "en" ? en : es;

  const cart = useAppContext();

  function handleClick() {
    cart.addItemToCart(item);
    cart.openCart();
  }
  return (
    <button className={style.button} onClick={handleClick}>
      {t.cart.addcart}
    </button>
  );
}
