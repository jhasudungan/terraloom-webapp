import { CartItem } from '@/schema/pagedataschema';
import { create } from 'zustand';

interface CartState {
    cartItems: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (item: CartItem) => void;
    increaseItem: (item: CartItem) => void;
    decreaseItem: (item: CartItem) => void;
    clearCart: () => void;
}

const useCart = create<CartState>((set) => ({

    cartItems: [],

    addItem: (newItem: CartItem) =>
        set((state) => {

            const exists = state.cartItems.find((item) => item.id === newItem.id);
            
            if (exists) {
                // increase quantity if exists
                const newQty = exists.quantity+1;
                const newTotal = exists.price*newQty;

                return {
                    cartItems: state.cartItems.map((item) =>
                        item.id === newItem.id
                            ? { ...item, 
                                quantity: newQty,
                                total: newTotal
                            }
                            : item
                    ),
                };
            } else {
                // add new item
                return { cartItems: [...state.cartItems, newItem] };
            }
        }),

    increaseItem: (increasedItem: CartItem) => 
        set((state) => {

            const exists = state.cartItems.find((item) => item.id === increasedItem.id);

            if (exists) {
                
                // increase quantity if exists
                const newQuantity = exists.quantity+1;
                const newTotal = newQuantity*exists.price;

                return {
                    cartItems: state.cartItems.map((item) =>
                        item.id === increasedItem.id
                            ? { ...item, 
                                quantity: newQuantity,
                                total: newTotal
                            }
                            : item
                    ),
                };
            } else {
                // add new item
                return { cartItems: [...state.cartItems] };
            }
        }),

    decreaseItem: (decreasedItem: CartItem) => set((state) => {
        
        const exists = state.cartItems.find((item) => item.id === decreasedItem.id);
        
        if (exists) {
            
            // decrease quantity if exists
            const newQuantity = exists.quantity-1;

            // If quantity becomes 0 or less, remove the item from cart
            if (newQuantity <= 0) {
                return {
                    cartItems: state.cartItems.filter((item) => item.id !== decreasedItem.id)
                };
            }

            const newTotal = exists.price*newQuantity;

            return {
                cartItems: state.cartItems.map((item) =>
                    item.id === decreasedItem.id
                        ? { ...item, 
                            quantity: newQuantity,
                            total: newTotal
                            }
                        : item
                ),
            };
        } else {
            // add new item
            return { cartItems: [...state.cartItems] };
        }
    }),

    removeItem: (removedItem: CartItem) =>
        set((state) => ({
            cartItems: state.cartItems.filter((item) => item.id !== removedItem.id),
        })),

    clearCart: () => set({ cartItems: [] }),
}));

export { useCart };