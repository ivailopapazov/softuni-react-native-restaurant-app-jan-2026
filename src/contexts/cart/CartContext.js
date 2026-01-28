import { createContext, useContext } from "react";

export const CartConetxt = createContext({
    items: [],
    total: 0,
    addToCart(meal, quantity) {},
    increaseQuantity(index) {},
    decreaseQuantity(index) {},
    removeItem(index) {},
});

export function useCartContext() {
    const context = useContext(CartConetxt);

    if (!context) {
        throw new Error("useCartContext must be used within a CartProvider");
    }

    return context;
}
