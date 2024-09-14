import { CartItem, FavoriteItem } from "../types/types";


// add to cart
export const addToCart = (product: CartItem) => {
  let cart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");

  const productExists = cart.find((item: CartItem) => item.id === product.id);

  if (productExists) {
    cart = cart.map((item: CartItem) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.product_name} has been added to your cart.`);
};


// add to favorite
export const addToFavorite = (product: FavoriteItem) => {
  let favorite: FavoriteItem[] = JSON.parse(localStorage.getItem("favorite") || "[]");

  const productExists = favorite.find((item: FavoriteItem) => item.id === product.id);

  if (productExists) {
    favorite = favorite.map((item: FavoriteItem) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else {
    favorite.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("favorite", JSON.stringify(favorite));
  alert(`${product.product_name} has been added to your favorite.`);
};
