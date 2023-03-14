import Layout from "@/components/layout";
import { getItems } from "@/services/itemService";
import Product from "@/components/product";
import style from "../../styles/product.module.css";
import Head from "next/head";

export default function Index({ items }) {
  let keywords = "";

  items.map((product) => {
    keywords += `${product.title.replaceAll(",", "")}, `;
  });
  keywords = keywords;
  console.log(":::m", keywords);

  return (
    <Layout title="Store">
      <Head>
        <meta name="description" content="Store" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={style.h2}>Store</h1>
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
