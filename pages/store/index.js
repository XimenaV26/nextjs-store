import Layout from "@/components/layout";
import { getItems } from "@/services/itemService";
import Product from "@/components/product";
import style from "../../styles/product.module.css";
import Head from "next/head";
import { useRouter } from "next/router";
import en from "@/en";
import es from "@/es";

export default function Index({ items }) {
  const { asPath, locale, locales } = useRouter();
  const t = locale === "en" ? en : es;

  let keywords = "";

  items.map((product) => {
    keywords += `${product.title.replaceAll(",", "")}, `;
  });
  keywords = keywords;
  console.log(":::m", keywords);

  return (
    <Layout title={`${t.seo.titleS}`}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={style.h2}>{t.store.title}</h1>
      <div className={style.items}>
        {items &&
          items.map((item) => (
            <Product key={item.id} item={item} showAs="Default" />
          ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await getItems();

  return {
    props: {
      items: res,
    },
  };
}
