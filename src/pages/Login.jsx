import './login.css'

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Config from '../config';
import axios from 'axios';
import qs from 'qs';

const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // You can perform validation on the phone number here if needed
        if (isNaN(+phoneNumber) || phoneNumber.length !== 10)
            return;

        const data = qs.stringify({
            'phone': phoneNumber,
            'dial_code': '+91'
        });

        try {
            const response = await axios.post(`${Config.ip}/pwa/user/register`, data, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            });
            if (response.data.status === 'Success')
            // Navigate to the /otp route and pass the phone number as a query parameter
                navigate('/otp', { state: { phoneNumber } });
            else
                throw new Error('Something went wrong');  
        } catch (error) {
            console.log(error);
        }
    }

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    }

    return (
        <div className='login_container'>
            <p id="enter_mobile_number">Enter Your Mobile Number</p>
            <p id="verification_text">We will send you the 6 digit verification code.</p>
            <form className='login_form' onSubmit={handleSubmit}>
                <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    placeholder="Enter Mobile Number"
                    required
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                />
                <button
                    type="submit"
                    id="login_button"
                >
                    Send Code
                </button>
            </form>
        </div>
    );
}

export default Login;