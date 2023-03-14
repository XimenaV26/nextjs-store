import { createContext, useContext, useState } from "react";

const AppContext = createContext({
  isOpen: true, //Porpiedad para saber si el carrito de compras esta abierto
  items: [], //Propiedad que almacena un arraglo de objetos. Se guardara la info del carrito
  openCart: () => {}, //Metodo para abrir el carrito
  closeCart: () => {},
  addItemToCart: (item) => {}, //Metodo para agregar productos al carrito
  getNumberOfItems: () => {}, //Metodo que regresa el numero de productos que tiene el carrito de compras
});

export default function StateWrapper({ children }) {
  const [isOpen, setIsOpen] = useState(false); //Propiedad reactiva que cuando cambie a verdadero o falso se actualizara la interfaz
  const [items, setItems] = useState([]);

  function handleOpenCart() {
    setIsOpen(true);
  }

  function handleCloseCart() {
    setIsOpen(false);
  }

  //Se pide un elemento(item), despues se hace la funcionalidad para agregarñp a items
  //Buscamos los elementos con find. Esto nos regresra el primer elemento que se encuentre
  function handleAddItemToCart(item) {
    const temporal = [...items];
    const found = temporal.find((product) => product.id === item.id);

    //Si el elemento se encuentra dentro del carrito de compras. Solo se actualiza la cantidad
    //Si el producto no se encuentra creamos un nuevo objeto
    if (found) {
      found.qty++;
    } else {
      item.qty = 1;
      temporal.push(item);
    }
    setItems([...temporal]); //Actualizamos el estado
  }

  //Metodo para sumar el numero de elementos que se encuentran en el carrito
  function handleNumberOfItems() {
    const total = items.reduce((acc, item) => acc + item.qty, 0);

    return total;
  }
  return (
    <AppContext.Provider
      value={{
        isOpen,
        items,
        openCart: handleOpenCart,
        closeCart: handleCloseCart,
        addItemToCart: handleAddItemToCart,
        getNumberOfItems: handleNumberOfItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
