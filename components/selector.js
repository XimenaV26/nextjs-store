import { useRouter } from "next/router";
import style from "../styles/select.module.css";

export default function Selector() {
  const router = useRouter();

  const handleChange = (event) => {
    router.push(router.pathname, router.pathname, {
      locale: event.target.value,
    });
  };

  return (
    <div className={style.contentselect}>
      <select onChange={handleChange}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
      </select>
      <i></i>
    </div>
  );
}
