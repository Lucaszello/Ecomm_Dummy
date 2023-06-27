import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface productProp {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string;
  quantity: number;
}

export interface CartStoreProp {
  products: productProp[];
  favCart: productProp[];
  addToCart: (product: productProp) => void;
  removeToCart: (id: number) => void;
  addToClick: (id: number) => void;
  removeToClick: (id: number) => void;
  deleteToClick: (product: productProp) => void;
  favListClick: (product: productProp) => void;
  remoFavClick: (id: number) => void;
}


export const CartStore = create(
  persist(
    (set) => ({
      products: [],
      favCart : [],
      addToCart: (product: productProp) =>
        set((state: any) => ({
          products: [...state.products, { ...product, quantity: 1 }],
          quntity: state.quantity++,
        })),
      removeToCart: (id: number) =>
        set((state: any) => ({
          products: state.products.filter((pro: productProp) => pro.id !== id),
          quantity: state.quantity--,
        })),
      addToClick: (id: number) =>
        set((state: any) => ({
          products: state.products.map((item: productProp) => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity + 1 };
            } else {
              return item;
            }
          }),
        })),
      removeToClick: (id: number) =>
        set((state: any) => ({
          products: state.products.map((item: productProp) => {
            if (item.id === id && item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return item;
            }
          }),
        })),
      deleteToClick: (produce: productProp) => {
        set((state: CartStoreProp) => ({
          products: state.products.filter(
            (item: productProp) => item.id !== produce.id
          ),
        }));
      },
      favListClick : (product : any) => {
        set((state : any) => ({
          favCart : [...state.favCart,product]
        }))
      },
      remoFavClick : (id : number) => {
        set((state : any) => ({
          favCart : state.favCart.filter((item : any) => item.id !== id)
        })  )
      }
    }),
    {
      name: "cart-storage",
    }
  )
);


