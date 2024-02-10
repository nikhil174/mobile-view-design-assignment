import './login.css'

const OtpVerification = () => {
    return (
        <>
            <div className='otp_container'>
                <div className='otp_back'>
                    <span>
                        <img 
                        src="arrow_back.svg" alt="back_arrow_logo" height={24} width={24} />                        
                    </span>
                </div>
                <p id="enter_mobile_number">OTP Verification</p>
                <p id="verification_text">Enter the verification code we just sent on your Mobile Number</p>
                <form className='login_form'>
                    <input type="tel" id="mobileNumber" name="mobileNumber" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Enter Mobile Number" required />
                    <button type="submit" id="login_button">Verify</button>
                </form>
                <p id="resend_code_text">Didn't received code? Resend</p>
            </div>
        </>
    );
}

export default OtpVerification;