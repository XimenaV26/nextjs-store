import { getItems } from "@/services/itemService";
import { useRouter } from "next/router";

//Funcion para obtener la id de todos los productos
//Rutas dinamicas
export async function getPathsFromIds() {
  //Regresa el arreglo de objetos
  const items = await getItems();

  //Para que las rutas sean dinamicas se utilliza el params con dentro el id (Este id es el mismo que el archivo [id].js) y el valor que queremos, en este caso el id
  const ids = items.map((item) => {
    return {
      params: {
        id: convertToPath(item.title),
      },
    };
  });
  return ids;
}

export async function getItemData(id) {
  const items = await getItems();
  const product = items.find((item) => convertToPath(item.title) === id);

  return {
    id: id,
    data: product,
  };
}

export function convertToPath(title) {
  return title.toLowerCase().replace(/\s/g, "-");
}
