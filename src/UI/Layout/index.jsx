import Header from "../Header";
import Footer from "../Footer";

export default function Layout({cartCount ,children}){
    return (
        <>
            <Header cartCount={cartCount}></Header>
            {children};
            <Footer/>
        </>
    );
}