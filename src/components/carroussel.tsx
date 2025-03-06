import './carroussel.css';
import Song_card from './song_card';
const Carrousel = () => {
    return (
        <>
        <div>
            <h1>Carroussel</h1>
            <div className="esc_carroussel">
                <div className="esc_carroussel_container">
                    <div className="esc_carroussel_item"><Song_card /></div>
                    <div className="esc_carroussel_item"><Song_card /></div>
                    <div className="esc_carroussel_item"><Song_card /></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Carrousel;