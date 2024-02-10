import './tasteCard.css';

const TasteCard = () => {
    return (
        <div className="tastecard_container">
            <div className="tastcard_img">
                <img src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="" />
            </div>
            <div className="tastecard_detail">
                <div className="tastecard_detail_name">Nik Baker's</div>
                <div className="tastecard_detail_place">
                    Connaught Place, New Delhi'
                </div>
            </div>
        </div>
    );
}

export default TasteCard;