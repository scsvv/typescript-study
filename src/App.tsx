import {useState} from 'react';
import {useQuery} from "react-query";
//components
import Item from './components/item/Item'
import Cart from "./components/cart/Cart";
import Drawer from "@material-ui/core/Drawer";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";
//styles
import { Wrapper, GlobalStyle, StyledButton } from "./App.styles";
//Types
export type ICardItem = {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    amount: number;
}

const getProducts = async (): Promise<ICardItem[]> =>
    await (await fetch('https://fakestoreapi.com/products')).json();

const App = () =>  {
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] =  useState([] as ICardItem[])
    const {data, isLoading, error} = useQuery<ICardItem[]>('products', getProducts);

    const getTotalItems = (items: ICardItem[]) =>
        items.reduce((ack: number, item) => ack + item.amount, 0)

    const handleAddToCart = (clickedItem: ICardItem) => {
        setCartItems((prev) => {
            const isItemInCart = prev.find(item => item.id === clickedItem.id);

            if (isItemInCart) {
                return prev.map( item =>
                    item.id === clickedItem.id
                    ? {...item, amount: item.amount + 1}
                    : item
                )
            }

            return [...prev, {...clickedItem, amount: 1}]
        })
    };
    const handleRemoveFromCart = (id: number) => {
       setCartItems(
           prev => prev.reduce( (ack, item) => {
               if(item.id) {
                   if(item.amount === 1) return ack;
                   return [...ack, {...item, amount: item.amount - 1}]
               }
               return [...ack, item]
           }, [] as ICardItem[])
       )
    };

    return (
    <>
        <GlobalStyle />
        { isLoading && <LinearProgress /> }
        { error && (<div> Something went wrong... </div>)}
        <Wrapper>
            <Drawer
                anchor='right'
                open={cartOpen}
                onClose={() => setCartOpen(false)}
            >
                <Cart
                    cartItem={cartItems}
                    addToCart={handleAddToCart}
                    removeFromCart={handleRemoveFromCart}
                />

            </Drawer>

            <StyledButton onClick={() => setCartOpen(true)}>
                <Badge badgeContent={getTotalItems(cartItems)} color="error">
                   <AddShoppingCartIcon />
                </Badge>
            </StyledButton>

            <Grid container spacing={3}>
                 {data?.map((item: ICardItem, index: number) => (
                     <Grid item key={index} xs={12} sm={4}>
                         <Item item={item} handleAddToCart={handleAddToCart} />
                     </Grid>
                 ))}
             </Grid>
        </Wrapper>
    </>
);
}

export default App;
