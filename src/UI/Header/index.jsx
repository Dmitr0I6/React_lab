export default function Header({cartCount}){





    return (
        <header className="header">
            <div className="container">
                <div className="header_inner">
                    <div className="logo_container">
                        <h1 className="logo">Logo</h1>
                    </div>
                    <nav className="nav_block">
                        <a className="header_link" href="#">Shop</a>
                        <a className="header_link" href="#">Blog</a>
                        <a className="header_link" href="#">Our story</a>
                        <a className="header_link" href="#">Cart</a>
                        <span className="cart">{cartCount}</span>
                    </nav>
                </div>
            </div>
        </header>
    );
}