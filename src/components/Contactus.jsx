const Contactus = () => {
    return(
        <div className="Contactus" id="Contactus">
            <hr />
            <h1>Contact Us</h1>
            <p><b>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores eligendi, ad recusandae maiores laboriosam harum architecto vitae? Recusandae rerum, amet, numquam laboriosam facere sed eligendi, fugit unde commodi suscipit voluptatem!</b></p> <br />

            <div className="container">
                <div className="item1">
                    <h6>EMAIL ADDRESS</h6>
                    <h4>myreactapp@gmail.com</h4>
                </div>
                <div className="item2">
                    <h6>PHONE / WHATSAPP</h6>
                    <h4>254710994820</h4>
                </div>
                <div className="item3">
                    <h6>LOCTATION</h6>
                    <h4>Machakos, Kenya</h4>
                </div>
                <div className="item4">
                    <h6>RESPONE TIME</h6>
                    <h4>254710994820</h4>
                </div>
                <div className="item5">
                    <h2>Get in Touch</h2>
                    <form>
                        <label>Your Name</label> <br />
                        <input type="text" placeholder="John" />

                        <label>Email Address</label> <br />
                        <input type="email" placeholder="john@gmail.com" />

                        <label>Message</label> <br />
                        <textarea placeholder="Tell us anything..."></textarea>

                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div> <br />
        </div>
    )
}


export default Contactus;