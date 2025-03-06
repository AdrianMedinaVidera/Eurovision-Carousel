import './song_card.css'
const Song_card = () => {
    return (
        <>
        <div className="esc_card_container">
            <div className="flag_container">Country Flag</div>
            <div className="song_info">
                <p className="song_name">SONG NAME</p>
                <p className="singer">Singer</p>
                <p className="country">Country</p>
                <p className="points">Total Points</p>
            </div>
            <div className="position">Position</div>
        </div>
        </>
    )
}

export default Song_card;