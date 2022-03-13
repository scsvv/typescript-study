
import Button from "@material-ui/core/Button"

import {ICardItem} from "../../App";

import { Wrapper } from "./Item.styles"

type Props = {
    item: ICardItem,
    handleAddToCart: (clikedItem: ICardItem) => void;
}

const Item: React.FC<Props> = ({item, handleAddToCart}) => (
    <Wrapper>
        <img src={item.image} alt={item.title} />
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>{item.price}</h3>
        </div>
        <Button onClick={() => handleAddToCart(item)}>
            Add to Card
        </Button>
    </Wrapper>
)

export default Item;
