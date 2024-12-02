import { useState } from 'react';
import FSlide from '../../assets/images/frslide.jpg'
import SSlide from '../../assets/images/secondslide.jpg'


export default function Slider(){

    const [activeSlide, setActiveSlide] = useState(0);

    const moveSlide = (val) => setActiveSlide(val);
    setTimeout(() => setActiveSlide(activeSlide + 1), 7000);


    return(
        <div className="intro">    
            <div className="container">
                <div className="slider">
                    <div className="slides">
                        <div className={activeSlide%4 === 0 ?"slide active" : "slide"}>
                            <div className="slide_inner" style={{backgroundImage: `url(${FSlide})`}}>
                                <h2 className="slide_title">Gold big hoops</h2>
                                <h2 className="slide_cost">$ 68,00</h2>
                                <button className="veiw_prod" name="veiw-prod-btn" id="veiw-prod-btn1">View Product</button>
                            </div>
                        </div>
                        <div className={activeSlide%4 === 1 ?"slide active" : "slide"}>
                            <div className="slide_inner" style={{backgroundImage: `url(${SSlide})`}}>
                                <h2 className="slide_title">Gold big hoops</h2>
                                <h2 className="slide_cost">$ 68,00</h2>
                                <button className="veiw_prod" name="veiw-prod-btn" id="veiw-prod-btn1">View Product</button>
                            </div>
                        </div> 
                        <div className={activeSlide%4 === 2 ?"slide active" : "slide"}>
                            <div className="slide_inner" style={{backgroundImage: `url(${FSlide})`}}>
                                <h2 className="slide_title">Gold big hoops</h2>
                                <h2 className="slide_cost">$ 68,00</h2>
                                <button className="veiw_prod" name="veiw-prod-btn" id="veiw-prod-btn1">View Product</button>
                            </div>
                        </div> 
                        <div className={activeSlide%4 === 3 ?"slide active" : "slide"}>
                            <div className="slide_inner" style={{backgroundImage: `url(${SSlide})`}}>
                                <h2 className="slide_title">Gold big hoops</h2>
                                <h2 className="slide_cost">$ 68,00</h2>
                                <button className="veiw_prod" name="veiw-prod-btn" id="veiw-prod-btn1">View Product</button>
                            </div>
                        </div>   
                    </div>
                    <div className="dots">
                        <button id = "dot1" onClick={()=>setActiveSlide(0)} className={activeSlide%4 === 0 ?"dot active" : "dot"}></button>
                        <button id = "dot2" onClick={()=>setActiveSlide(1)} className={activeSlide%4 === 1 ?"dot active" : "dot"}></button>
                        <button id = "dot3" onClick={()=>setActiveSlide(2)} className={activeSlide%4 === 2 ?"dot active" : "dot"}></button>
                        <button id = "dot4" onClick={()=>setActiveSlide(3)} className={activeSlide%4 === 3 ?"dot active" : "dot"}></button>
                    </div>
                </div>
            </div>
        </div>
    );
}