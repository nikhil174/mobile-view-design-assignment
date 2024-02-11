import './login.css'
import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import qs from 'qs';
import axios from 'axios';
import Config from '../config';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OtpVerification = () => {
    const navigate = useNavigate();

    const location = useLocation();
    const phoneNumber = location.state?.phoneNumber;
    useEffect(() => {
        if (!phoneNumber) {
            navigate('/login');
        }
    }, [navigate]);

    const [otp, setOtp] = useState(new Array(6).fill(""));

    const inputRefs = useRef([]);
    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, [])

    const handleChange = (index, e) => {
        const value = e.target.value;
        if (isNaN(value)) return;
        const newOtp = [...otp]
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);

        if (value && index < 5 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus();
        }
    }

    const handleClick = (index) => {
        inputRefs.current[index].setSelectionRange(1, 1);
    }

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0 && inputRefs.current[index - 1]) {
            inputRefs.current[index - 1].focus();
        }
    }

    const verify = async (e) => {
        e.preventDefault();
        const combineOtp = otp.join("");
        if (combineOtp.length !== 6) {
            console.log('Invalid otp');
            return;
        }

        const data = qs.stringify({
            'phone': phoneNumber,
            'otp': combineOtp,
            'dial_code': '+91'
        });
        try {
            const response = await axios.post(`${Config.ip}/pwa/user/login`, data, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            });
            if (response.data.status === 'Success') {
                const userData = {
                    username: response.data.data.user_name,
                    accessToken: response.data.data.token
                };
                localStorage.setItem('userData', JSON.stringify(userData));
                navigate('/');
            }
            else
                throw new Error('Something went wrong');
        } catch (error) {
            console.log(error);
        }
    }

    const handleResend = async () => {
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
            if (response.data.status === 'Success') {
                toast.success('OTP Sent!');
            } else {
                throw new Error('Something went wrong');
            }
        } catch (error) {
            toast.error('Failed to Send OTP.');
            console.error(error);
        }
    }

    return (
        <>
            <div className='otp_container'>
                <div
                    className='otp_back'
                    onClick={() => { navigate('/login') }}
                >
                    <span className="material-symbols-outlined">
                        chevron_left
                    </span>
                </div>
                <p id="enter_mobile_number">OTP Verification</p>
                <p id="verification_text">Enter the verification code we just sent on your Mobile Number</p>
                <form className='otp_form'>
                    {
                        otp.map((value, index) => {
                            return <input
                                key={index}
                                type="text"
                                ref={(input) => inputRefs.current[index] = input}
                                value={value}
                                onChange={(e) => handleChange(index, e)}
                                onClick={() => handleClick(index)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                className='otp_input'
                            />
                        })
                    }
                    <button
                        type="submit"
                        id="login_button"
                        onClick={(e) => verify(e)}
                    >Verify</button>
                </form>
                <p id="resend_code_text">Didn't received code?
                    <span
                        id="resendbtn"
                        onClick={handleResend}
                    >
                        {" "}Resend
                    </span>
                </p>
            </div>
        </>
    );
}

export default OtpVerification;