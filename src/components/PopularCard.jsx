import './popularCard.css';

const PopularCard = ({ id, name, imgSrc, location, cost, currency, handleClick, rating }) => {
    return (
        <div
            className="popularcard_container"
            onClick={() => handleClick(id)}
        >
            <div className="popularcard_img">
                <img src={imgSrc} alt="" />
            </div>
            <div className="popularcard_detail">
                <div className="popularitycard_header">
                    <div className="popularcard_detail_name">{name}</div>
                    <div className="popularcard_detail_place">
                        Cake, Pastry, Pastas
                    </div>
                    <div className="popularcard_detail_place">
                        {location}
                    </div>
                    <p className="popularcard_offers">
                        4 offers trending
                    </p>
                </div>
                <div className="popularity_price">
                    <div className="popularity">
                        <p id="popularity_first">★ {rating}</p>
                        <p id="popularity_second">popularity</p>
                    </div>
                    <div className="price">
                        <p id="price_first">{currency}{cost}</p>
                        <p id="price_second">cost for two</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopularCard;