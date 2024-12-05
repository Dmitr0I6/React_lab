import Layout from "../Layout";
import Slider from '../Slider'
import Cards from '../Card'

export default function Home({cartCount,setCartCount}){
    return (
        <Layout cartCount={cartCount}>
            <Slider/>
            <Cards setCartCount = {setCartCount}/>
        </Layout>
    );
}