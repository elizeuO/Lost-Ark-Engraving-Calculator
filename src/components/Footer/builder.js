import React from "react";
import './footer.scss';

const footer = () =>{
    return <footer id="donation" className="c-footer c__center">

<div className="c-container">

    <b>Found the project useful? Help me with a donation, i'll make this tool better and better!</b>

    <div className="l-flex l-flex--center l-flex--wrap c__mobile-center">
        <a href="https://www.paypal.com/donate/?hosted_button_id=J5XYLNGDSKEDE&source=qr" target="_bank" title="Donate with paypal">
            <img src="images/paypal.png" className="c-donate"/>
        </a>

        <a href="https://picpay.me/elizeuO" target="_bank" title="Donate with picpay">
            <img src="images/picpay.png" className="c-donate"/>
        </a>

        <a target="_bank" title="Donate with pix">
            <img src="images/pix.png" className="c-donate"/>
        </a>

    </div>

        <div className="c-copyrights">
            © Developed by Elizeu Oliveira da Silva (Yukisuke)
        </div>

</div>

    </footer>

}

export default footer;