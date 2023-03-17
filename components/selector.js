import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import style from "../styles/select.module.css";

export default function Selector() {
  const router = useRouter();
  const select = useRef("");

  const handleChange = (event) => {
    //console.log(":::h", router.pathname, event.target.value);
    router.push(router.pathname, router.pathname, {
      locale: event.target.value,
    });
  };

  useEffect(() => {
    if (router.locale == "es") {
      select.current.value = "es";
    }
  }, []);

  return (
    <div className={style.contentselect}>
      <select ref={select} id="idioma" onChange={handleChange}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
      </select>
      <i></i>
    </div>
  );
}
