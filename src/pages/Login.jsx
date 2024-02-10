import './login.css'

const Login = () => {
    return (
        <div className='login_container'>
            <p id="enter_mobile_number">Enter Your Mobile Number</p>
            <p id="verification_text">We will send you the 4 digit verification code.</p>
            <form className='login_form'>
                <input type="tel" id="mobileNumber" name="mobileNumber" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Enter Mobile Number" required />
                <button type="submit" id="login_button">Send Code</button>
            </form>
        </div>
    );
}

export default Login;