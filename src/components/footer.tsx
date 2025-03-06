import Button from "./button"
import "./footer.css"
import Number_input from "./number_input";
import Selector from "./selector";

const Footer = () => {
    return (
        <>
            <div className="esc_button_container">
                <Button />
                <Number_input />
                <Button />
            </div>
        </>
    )
}

export default Footer;