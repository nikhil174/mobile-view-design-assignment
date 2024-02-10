import './tasteCard.css';

const TasteCard = ({ id, name, location, imgSrc, handleClick }) => {
    return (
        <div
            className="tastecard_container"
            onClick={() => handleClick(id)}
        >
            <div className="tastcard_img">
                <img src={imgSrc} alt="" />
            </div>
            <div className="tastecard_detail">
                <div className="tastecard_detail_name">{name}</div>
                <div className="tastecard_detail_place">
                    {location}
                </div>
            </div>
        </div>
    );
}

export default TasteCard;