export default function Footer(){
    return (
        <footer className="footer">
        <div className="container">
            <div className="footer_line"></div>
            <div className="footer_inner">
                <div className="footer_links">
                    <a className="footer_link" href="#">Contact</a>
                    <a className="footer_link" href="#">Terms of services</a>
                    <a className="footer_link" href="#">Shipping and returns</a>
                </div>
                <input type="email" name="follow_email" id="email" placeholder="Give an email, get the newsletter."></input>
            </div>
            <div className="footer_out">
                <h6 className="footer_out_text">© <strong>2021 Shelly. </strong>Terms of use <strong>and</strong> privacy policy.</h6>
            </div> 
        </div>
    </footer>
    );
}