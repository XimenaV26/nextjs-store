import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Layout from "@/components/layout";
import Product from "@/components/product";
import styleProduct from "../styles/product.module.css";
import { getLimitItems } from "@/services/itemService";
import style from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ items }) {
  return (
    <Layout title="Home">
      <div className={style.banner}>
        <div className={style.bannerBackground}>
          <div className={style.bannerInfo}></div>
        </div>
      </div>
      <h2 className={style.h2}>Latest Products</h2>
      <div className={styleProduct.items}>
        {items &&
          items.map((item) => (
            <Product key={item.id} item={item} showAs="item" />
          ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await getLimitItems();

  return {
    props: {
      items: res,
    },
  };
}
