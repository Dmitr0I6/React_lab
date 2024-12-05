import Layout from "../Layout";

export default function Cart({cartCount,setCartCount}){
    return (

        <Layout cartCount={cartCount} setCartCount={setCartCount}>
            <h2>Товары в вашей корзине</h2>
            <div className="cart_cont">
                <div className="goods"></div>
                <div className="goods"></div>
                <div className="goods"></div>
            </div>
            </Layout>
    );
}