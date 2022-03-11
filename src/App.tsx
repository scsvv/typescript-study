import {useState} from 'react';
import {useQuery} from "react-query";
//components
import Item from './components/item/Item'
import Drawer from "@material-ui/core/Drawer";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";
//styles
import { Wrapper, GlobalStyle } from "./App.styles";
//Types
export interface CardItem {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    amount: number;
}

const getProducts = async (): Promise<CardItem[]> =>
    await (await fetch('https://fakestoreapi.com/products')).json();

const App = () =>  {
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] =  useState([] as CardItem[])
    const {data, isLoading, error} = useQuery<CardItem[]>('products', getProducts);

    const getTotalItems = () => null;

    const handleAddToCart = (clickedItem: CardItem) => null;

    const handleRemoveFromCart = () => null;

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
                Cart goes here
            </Drawer>


            <Grid container spacing={3}>
                 {data?.map((item: CardItem, index: number) => (
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
