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
export type CardItemType = {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    amount: number;
}


const getProducts = async (): Promise<CardItemType[]> =>
    await (await fetch('https://fakestoreapi.com/products')).json();

const App = () =>  {
    const {data, isLoading, error} = useQuery<CardItemType[]>('products', getProducts);
    console.log(data);

    const getTotalItems = () => null;

    const handleAddToCart = (clickedItem: CardItemType) => null;

    const handleRemoveFromCart = () => null;

    return (
    <>
        <GlobalStyle />
        { isLoading && <LinearProgress /> }
        { error && (<div> Something went wrong... </div>)}
        <Wrapper>
            <Grid container spacing={3}>
                 {data?.map((item: CardItemType, index: number) => (
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
