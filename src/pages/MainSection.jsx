import PopularCard from '../components/PopularCard';
import TasteCard from '../components/TasteCard';
import './mainSection.css'

const MainSection = () => {
    return (
        <div className='main_container'>
            <div className="main_header">
                <p id="main_header_first">Pre Order from</p>
                <p id="main_header_second">Connaught Place</p>
            </div>
            <div className="user_details">
                <div className="user_name">
                    <p id="user_name_first">Karan</p>
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
                    <p id="taste_header_second">See all</p>
                </div>
                <div class="tastecards_outer_container">
                <div className="tastecards_container">
                    <TasteCard />
                    <TasteCard />                <TasteCard />                <TasteCard />
                </div>
                </div>

            </div>

            <div className="popular_section">
                <div className="popular_header">
                    <p id="popular_header_first">Popular Once</p>
                </div>
                <div className="popular_card_container">
                    <PopularCard />
                    <PopularCard />
                    <PopularCard />
                    <PopularCard />
                </div>
            </div>
        </div>
    );
}

export default MainSection;