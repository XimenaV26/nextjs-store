import Layout from "@/components/layout";
import Product from "@/components/product";
import { getItemData, getPathsFromIds } from "@/lib/utils";
import Head from "next/head";

export default function ProductPage({ productInfo }) {
  return (
    <Layout title={productInfo.data.title}>
      <Head>
        <meta name="description" content={`${productInfo.data.description}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Product item={productInfo.data} showAs="Page" />
    </Layout>
  );
}

//Funcion que permite generar las rutas dinamicas para cada elemento
export async function getStaticPaths() {
  //Mandamos a llamar a la funcion creada en utils.js
  const paths = await getPathsFromIds();

  //Devolvemos el arreglo de objetos para utilizarlo como prop
  //El nombre de la propiedad debe ser paths.
  //La propiedad fallback indica que si una ruta no existe nos devuelva una pagina 404
  return {
    paths: paths,
    fallback: false,
  };
}

//Desestrurturamos params que es la propiedad que se utilizo en utils.js
//Este va a tener informacion de la url que se esta visitando
export async function getStaticProps({ params }) {
  const id = params.id;
  const product = await getItemData(id);

  return {
    props: {
      productInfo: product,
    },
  };
}
