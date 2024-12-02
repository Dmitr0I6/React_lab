import ProductCard from "./ProductCard";
import img1 from "../../assets/images/f1.jpg"
import img2 from "../../assets/images/f2.jpg"
export default function Cards({setCartCount}){
    return (
        <section className="product_section">
            <div className="container">
                <div className="section_header">
                    <h2 className="title_of_section">Shop The Latest</h2>
                    <a className="link_veiw_all" href="#">View All</a>
                </div>
                <div className="product_container">
                    <ProductCard img = {img1} setCartCount = {setCartCount}/>
                    <ProductCard img = {img2} setCartCount = {setCartCount}/>
                    <ProductCard img = {img1} setCartCount = {setCartCount}/>
                    <ProductCard img = {img2} setCartCount = {setCartCount}/>
                    <ProductCard img = {img1} setCartCount = {setCartCount}/>
                    <ProductCard img = {img2} setCartCount = {setCartCount}/>
                </div>
            </div>
        </section>
    );
}