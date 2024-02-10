import { useState } from "react";
import './item.css'

const Item = () => {

    const [data, setData] = useState({
        "restaurant_name": "Rahul Store",
        "location": {
            "location_id": 1,
            "location_address": "B-6/2, Model Town 1, Model Town Phase I, Mukherjee Nagar, New Delhi, Delhi 110009",
            "location_address_2": "Model Town",
            "location_zip_code": 110009,
            "location_lat": 28.703186,
            "location_long": 77.19393,
            "location_locality": "Model Town",
            "city_name": "Delhi",
            "state_name": "Delhi",
            "city_id": null,
            "country_id": "103",
            "state_id": "35",
            "update_count": "0"
        },
        "images": [
            {
                "url": "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            }
        ],
        "details": "As a college student, much of your time will be spent interacting with texts of all types, shapes, sizes, and delivery methods. Sound interesting? Oh, it is. In the following sections, we’ll explore the nature of texts, what they will mean to you, and how to explore and use them effectively."
    })

    return (
        <div className="item_container">
            <div className="item_img">
                <img src={data['images'][0]['url']} alt="" />
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