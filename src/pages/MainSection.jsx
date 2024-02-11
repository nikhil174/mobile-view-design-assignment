import { useContext, useEffect, useState } from 'react';
import MainCarousal from '../components/MainCarousal';
import PopularCard from '../components/PopularCard';
import TasteCard from '../components/TasteCard';
import './mainSection.css'
import { Link, useNavigate } from 'react-router-dom';
import Config from '../config';
import axios from 'axios';
import { useUserContext } from '../context/userContext';

const MainSection = () => {
    // Retrieve user data from localStorage
    const { accessToken, username, restaurants, setRestaurants, setAccessToken, setUsername } = useUserContext();

    // Hook for navigation
    const navigate = useNavigate();

    // Redirect to login if user data is not available or access token is missing
    useEffect(() => {
        if (accessToken == null) {
            let userData = localStorage.getItem('userData');
            userData = userData ? JSON.parse(userData) : undefined;

            if (userData) {
                setAccessToken(userData.accessToken);
                setUsername(userData.username);
            } else {
                console.log('Unauthorized');
                navigate('/login');
            }
        }
    }, [accessToken]);

    // Fetch restaurants data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${Config.ip}m/restaurant?city_id=112`, {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                    },
                });
                if (response.data) {
                    setRestaurants(response.data);
                } else {
                    throw new Error('Something went wrong');
                }
            } catch (error) {
                console.log(error);
            }
        };
        if (accessToken) {
            fetchData();
        }
    }, [accessToken]);

    const handleClick = (id) => {
        navigate(`/item/${id}`, { state: { id } });
    }

    return (
        <div className='main_container'>
            <div className="main_header">
                <p id="main_header_first">Pre Order from
                    <span className="material-symbols-outlined">
                        person
                    </span>
                </p>
                <p id="main_header_second">Connaught Place</p>
            </div>
            <div className="user_details">
                <div className="user_name">
                    <p id="user_name_first">{username}</p>
                    <p id="user_name_second">Let's explore this evening</p>
                </div>
                <div className="main_offer_wallet">
                    <div className="main_offer">
                        <img src="offers.png" alt="" />
                        <p>offers</p>
                    </div>
                    <div className="main_wallet">
                        <img src="wallet.png" alt="" />
                        <p>Wallet</p>
                    </div>
                </div>

            </div>
            <div className="your_taste_section">
                <div className="taste_header">
                    <p id="taste_header_first">Your taste</p>
                    <Link to="#" id="taste_header_second">See all</Link>
                </div>
                <div className="tastecards_outer_container">
                    <div className="tastecards_container">
                        {
                            restaurants && restaurants.map((restaurant) => {
                                return <TasteCard
                                    key={restaurant.restaurant_id}
                                    id={restaurant.restaurant_id}
                                    name={restaurant.restaurant_name}
                                    imgSrc={restaurant.images[0].url}
                                    location={`${restaurant?.location?.location_address_2}, ${restaurant?.location?.city_name}`}
                                    handleClick={handleClick}
                                />
                            })
                        }
                    </div>
                </div>

            </div>
            <div className="main_carousal_section">
                <MainCarousal />
            </div>
            <div className="popular_section">
                <div className="popular_header">
                    <p id="popular_header_first">Popular Once</p>
                </div>
                <div className="popular_card_container">
                    {
                        restaurants && restaurants.map((restaurant) => {
                            return <PopularCard
                                key={restaurant.restaurant_id}
                                id={restaurant.restaurant_id}
                                name={restaurant.restaurant_name}
                                imgSrc={restaurant.images[0].url}
                                location={`${restaurant?.location?.location_address_2}, ${restaurant?.location?.city_name}`}
                                handleClick={handleClick}
                                cost={restaurant.avg_cost_for_two}
                                currency={restaurant.currency?.symbol}
                                rating={restaurant['rating']['restaurant_avg_rating']}
                            />
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default MainSection;