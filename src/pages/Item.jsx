import { useEffect, useState } from "react";
import './item.css'
import { useLocation } from "react-router-dom";
import { useUserContext } from "../context/userContext";

const Item = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const location = useLocation();
    const itemId = location.state?.id;

    const { restaurants } = useUserContext();
    console.log(restaurants)

    const data = [
        {
            id: "1",
            src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
            alt: "",
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex(prevIndex => (prevIndex + 1) % data.length);
        }, 5000);

        return () => {
            clearInterval(timer);
        };
    }, [data.length]);

    return (
        <div className="item_container">
            <div className="item_img">
                {data.map((item, idx) => (
                    <img
                        key={item.id}
                        src={item['src']}
                        className={`${activeIndex === idx ? 'active' : ''}`}
                        alt=""
                    />
                ))}
            </div>
            <div className="item_carousal_dots">
                {data.map((item, idx) => (
                    <div
                        key={item.id}
                        className={`item_carousal_dot ${activeIndex === idx ? 'item_carousal_dot_active' : ''}`}
                    />
                ))}
            </div>
            <div className="item_details">
                <div className="item_heading">
                    <div className="item_name_section">
                        <p className="item_name">Lazy Bear</p>
                        <p className="item_location">Connaught Place, New Delhi</p>
                    </div>
                    <div className="item_rating">
                        4.5
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