import Product from "./product";
import { useAppContext } from "./stateWrapper";
import style from "../styles/shoppingCart.module.css";
import { useRouter } from "next/router";
import en from "@/en";
import es from "@/es";

export default function ShoppingCart() {
  const { asPath, locale, locales } = useRouter();
  const t = locale === "en" ? en : es;

  const cart = useAppContext();

  function handleCloseCart() {
    cart.closeCart();
  }

  function getTotal() {
    const total = cart.items.reduce(
      (acc, item) => acc + item.qty * item.price,
      0
    );
    return total;
  }
  return (
    <div
      className={style.shoppingCart}
      style={{ display: cart.isOpen ? "block" : "none" }}
    >
      <button className={style.close} onClick={handleCloseCart}>
        {t.cart.close}
      </button>

      {cart.items.length === 0 ? (
        <div className={style.empty}>{t.cart.empty}</div>
      ) : (
        <>
          <h3>{t.cart.item}</h3>
          <div>
            {cart.items.map((item) => (
              <Product
                key={item.id}
                item={item}
                showAs="ListItem"
                qty={item.qty}
              />
            ))}
          </div>
          <div className={style.total}>Total: ${getTotal()}</div>
        </>
      )}
    </div>
  );
}
