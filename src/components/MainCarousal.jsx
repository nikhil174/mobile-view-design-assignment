import { useState, useEffect } from 'react';
import './mainCarousal.css';

const MainCarousal = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const data = [
        {
            id: "1",
            src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
            alt: "",
        },
        {
            id: "2",
            src: "https://images.unsplash.com/photo-1682687219356-e820ca126c92?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "",
        },
        {
            id: "3",
            src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
            alt: "",
        },
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
        <>
            <div className="main_carousal">
                {data.map((item, idx) => (
                    <img
                        key={item.id}
                        src={item.src}
                        alt={item.alt}
                        className={`slide ${activeIndex === idx ? 'active' : ''}`}
                    />
                ))}
            </div>
            <div className="main_carousal_dots">
                {data.map((item, idx) => (
                    <div
                        key={item.id}
                        className={`main_carousal_dot ${activeIndex === idx ? 'main_carousal_dot_active' : ''}`}
                    />
                ))}
            </div>
        </>
    );
};

export default MainCarousal;
