import Button from "./button"
import "./footer.css"
import Selector from "./selector";

const Footer = () => {
    return (
        <>
            <div className="esc_button_container">
                <Button />
                <Selector />
                <Button />
            </div>
        </>
    )
}

export default Footer;