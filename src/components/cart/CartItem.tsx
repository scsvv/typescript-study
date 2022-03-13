import React from "react";
//components
import Button from "@material-ui/core/Button";
//types
import { ICardItem } from "../../App"
// Styles
import {Wrapper} from "./CartItem.styles";

type Props = {
    item: ICardItem,
    addToCart: (clickedItem: ICardItem) => void;
    removeFromCart: (id: number) => void;
}

const CartItem:React.FC<Props> = ({item, addToCart, removeFromCart}) => {

    return (
        <Wrapper>
            <div>
                <h3>{item.title}</h3>
                <div className="information">
                    <p>Price: {item.price}</p>
                    <p>Total: {(item.amount*item.price).toFixed(2)}</p>
                </div>
                <div className="button">
                    <Button
                        variant={"contained"}
                        onClick={()=>removeFromCart(item.id)}
                    >
                        -
                    </Button>
                    <p>{item.amount}</p>
                    <Button
                        variant={"contained"}
                        onClick={()=>addToCart(item)}
                    >
                        +
                    </Button>
                </div>
            </div>
            <img src={item.image} alt={item.description} />
        </Wrapper>
    )
}

export default CartItem
