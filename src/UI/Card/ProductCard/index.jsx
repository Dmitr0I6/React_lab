export default function ProductCard({img, setCartCount}){
    
    return (
        <div className="item_container">
            <div className="item_img" style={{backgroundImage: `url(${img})`}}>
                
                <div className="mask_btn"></div>
                <div className="add_to_cart"> 
                    <button  onClick = {()=>{setCartCount(prevState => prevState + 1)}} className="add_button" id="add_button1" name="add_to_cart_btn">Add to cart</button>
                </div>
            </div>
            <div className="discription_container">
                <h3 className="name_tag">Lira Earrings</h3>
                <h3 className="cost">$ 20,00</h3>
            </div>
        </div>
    );
}