import './popularCard.css';

const PopularCard = () => {
    return (
        <div className="popularcard_container">
            <div className="popularcard_img">
                <img src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="" />
            </div>
            <div className="popularcard_detail">
                <div className="popularitycard_header">
                    <div className="popularcard_detail_name">Nik Baker's</div>
                    <div className="popularcard_detail_place">
                        Cake, Pastry, Pastas
                    </div>
                    <div className="popularcard_detail_place">
                        Connaught Place, New Delhi'
                    </div>
                    <p className="popularcard_offers">
                        4 offers trending
                    </p>
                </div>
                <div className="popularity_price">
                    <div className="popularity">
                        <p id="popularity_first">4.5</p>
                        <p id="popularity_second">popularity</p>
                    </div>
                    <div className="price">
                        <p id="price_first">$200</p>
                        <p id="price_second">cost for two</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopularCard;