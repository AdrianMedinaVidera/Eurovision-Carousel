import logo_eurovision from '../assets/logo_eurovision.png';
import './header.css';
const Header = () => {
    return (
        <header>
            <div className='esc_title'>
                <h1>Eurovision XXXX</h1>
            </div>
            <div className='esc_description'>
                <img src={logo_eurovision} id='image'></img>
                <div><h1>Description</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, sed praesentium at quisquam fugiat quia asperiores earum eos vel eaque rem, architecto perferendis nulla fuga aperiam veritatis, necessitatibus excepturi debitis?</p>
                </div>
            </div>
        </header>
    )
}

export default Header;