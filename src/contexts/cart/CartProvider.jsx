import { useState } from "react";
import { CartConetxt } from "./CartContext";

export default function CartProvider({
    children,
}) {
    const [state, setState] = useState({
        items: [
            {
                meal: {
                    "id": "item-1",
                    "categoryId": "cat-1",
                    "name": "Classic Burger",
                    "description": "Juicy beef patty with lettuce, tomato, onion, and our secret sauce.",
                    "price": 8.99,
                    "featured": false,
                    "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400"
                },
                extras: {},
                quantity: 2,
            },
            {
                meal: {
                    "id": "item-4",
                    "categoryId": "cat-1",
                    "name": "Bacon Deluxe",
                    "description": "Premium burger with crispy bacon, avocado, and garlic aioli.",
                    "price": 13.99,
                    "imageUrl": "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400"
                },
                extras: {},
                quantity: 3,
            }
        ],
        total: 2,
    });

    const addToCart = (meal, quantity, extras = {}) => {
        setState(prevState => {
            const existingItemIndex = prevState.items.findIndex(
                item => item.meal.id === meal.id
            );

            let updatedItems;
            if (existingItemIndex !== -1) {
                // Item already exists, update quantity
                updatedItems = [...prevState.items];
                updatedItems[existingItemIndex] = {
                    ...updatedItems[existingItemIndex],
                    quantity: updatedItems[existingItemIndex].quantity + quantity,
                };
            } else {
                // New item, add to cart
                updatedItems = [
                    ...prevState.items,
                    {
                        meal,
                        extras,
                        quantity,
                    }
                ];
            }

            return {
                items: updatedItems,
                total: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
            };
        });
    };

    const data = {
        items: state.items,
        total: state.total,
        addToCart,
    };

    return (
        <CartConetxt.Provider value={data}>
            {children}
        </CartConetxt.Provider>
    );
}
