import Selector from './selector'
import './content.css';
import Carrousel from './carroussel';

const Content = () => {
    return (
        <>
        <div className='esc_selectors'>
            <Selector />
            <Selector />
        </div>
        <div>
            <Carrousel />
        </div>
        </>
    )
}

export default Content;