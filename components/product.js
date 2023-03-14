import Link from "next/link";
import style from "../styles/product.module.css";
import { convertToPath } from "@/lib/utils";
import CartButton from "./cartButton";
import Image from "next/image";

export default function Product({ item, showAs, qty }) {
  if (showAs === "Page") {
    return (
      <div className={style.page}>
        <div className={style.image}>
          <img
            src={item.image}
            alt={item.description}
            width={360}
            height={360}
          ></img>
        </div>

        <div className={style.info}>
          <div>
            <h2>{item.title}</h2>
          </div>
          <div className={style.price}>${item.price}</div>
          <div>{item.description}</div>
          <div>
            <CartButton item={item} />
          </div>
        </div>
      </div>
    );
  }

  if (showAs === "ListItem") {
    return (
      <div className={style.listItem}>
        <div>
          <img
            src={item.image}
            alt={item.description}
            width={70}
            height={70}
          ></img>
        </div>
        <div>
          <div>
            {" "}
            <h3>{item.title}</h3>
          </div>
          <div>{item.price}</div>
          {qty === 0 ? "" : <div>{qty} units</div>}
          {qty === 0 ? "" : <div>Subtotal: ${qty * item.price}</div>}
        </div>
      </div>
    );
  }

  return (
    <div className={style.item}>
      <div>
        <Link href={`/store/${convertToPath(item.title)}`}>
          <img
            src={item.image}
            alt={item.description}
            width={150}
            height={150}
          ></img>
        </Link>
      </div>
      <div>
        <h3>
          <Link href={`/store/${convertToPath(item.title)}`}>{item.title}</Link>
        </h3>
      </div>

      <div>$ {item.price}</div>
      <div>
        <CartButton item={item} />
      </div>
    </div>
  );
}
