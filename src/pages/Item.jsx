import { useEffect, useState } from "react";
import './item.css'
import { useLocation, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/userContext";

const Item = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const location = useLocation();
    const itemId = location.state?.id;
    const navigate = useNavigate();

    const { restaurants, accessToken } = useUserContext();

    useEffect(() => {
        if (!accessToken) {
            navigate('/login');
        }
    }, [accessToken])

    const restaurant = restaurants.find(r => r.restaurant_id === itemId);


    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex(prevIndex => (prevIndex + 1) % restaurant['images'].length);
        }, 5000);

        return () => {
            clearInterval(timer);
        };
    }, [restaurant['images'].length]);

    return (
        <div className="item_container">
            <div className="item_img">
                {restaurant['images'].map((item, idx) => (
                    <img
                        key={item['url']?.split('photo-')[1]}
                        src={item['url']}
                        className={`${activeIndex === idx ? 'active' : ''}`}
                        alt=""
                    />
                ))}
            </div>
            <div className="item_carousal_dots">
                {restaurant['images'].map((item, idx) => (
                    <div
                        key={item['url']?.split('photo-')[1]}
                        className={`item_carousal_dot ${activeIndex === idx ? 'item_carousal_dot_active' : ''}`}
                    />
                ))}
            </div>
            <div className="item_details">
                <div className="item_heading">
                    <div className="item_name_section">
                        <p className="item_name">{restaurant.restaurant_name}</p>
                        <p className="item_location">{`${restaurant?.location?.location_address_2}, ${restaurant?.location?.city_name}`}</p>
                    </div>
                    <div className="item_rating">
                    <span id="star">☆</span>{restaurant['rating']['restaurant_avg_rating']}
                    </div>
                </div>
                <div className="item_offers">
                    <p>4 Offers Trending</p>
                </div>
                <div className="item_description">
                    <p>
                        Our delicate vanilla cake swirled with chocolate and filled with mocha chocolate chip cream and a layer of dark chocolate ganache
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Item;