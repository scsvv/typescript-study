import React, {FC} from "react";
//Components
import CartItem from "./CartItem";
// styles
import {Wrapper} from "./Cart.styles";
//Interface
import {ICardItem} from "../../App";

type CartProps = {
    cartItem: ICardItem[];
    addToCart: (clickedItem: ICardItem) => void;
    removeFromCart: (id: number) => void;
};

const Cart: FC<CartProps> = ({
    cartItem,
    addToCart,
    removeFromCart
    }) => {
    return (
        <Wrapper>
            <h2>Your Shopping Cart</h2>
            { cartItem.length === 0 ? (<p>No items in cart.</p>): cartItem.map((item, index: number) => (
                  <CartItem
                      key={index}
                      item={item}
                      addToCart={addToCart}
                      removeFromCart={removeFromCart}
                    />

            ))}

        </Wrapper>
    )
}

export default Cart;

