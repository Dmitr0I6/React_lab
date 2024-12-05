import { useContext } from 'react';
import {Link} from 'react-router-dom'
import { ThemeContext } from '../../Context/ThemeContext';
export default function Header({cartCount}){

    const {theme, toggleTheme} = useContext(ThemeContext);



    return (
        <header className="header">
            <div className="container">
                <div className="header_inner">
                    <div className="logo_container">
                        <h1 className="logo">Logo</h1>
                    </div>
                    <nav className="nav_block">
                        <Link className="header_link" to= "/">Shop</Link>
                        <Link className="header_link" to="/Blog">Blog</Link>
                        <Link className="header_link" to="/Story">Our story</Link>
                        <Link className="header_link" to="/Cart">Cart</Link>
                        <span className="cart">{cartCount}</span>
                        <button onClick={toggleTheme}>
                            {theme}
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    );
}