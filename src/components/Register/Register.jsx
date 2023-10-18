import React, {useState} from "react";
import './Register.css';
import { Link } from "react-router-dom";

import googleLogo from '../../Assets/SocialMedia/google-logo.png';
import facebookLogo from '../../Assets/SocialMedia/facebook-logo.png';
import appleLogo from '../../Assets/SocialMedia/apple-logo.png';
import luchador from '../../Assets/luchadors.png'
import logo from "../../Assets/logo-suma-azul.png";
import {registerUser} from "../services/apiCalls";

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const [isError, setIsError] = useState(false);

    const handleRegister = () => {
        if (name && email && password) {
            registerUser(name, email, password)
                .then((data) => {
                    if (data.id) {
                        setAlertMessage(`Hello ${name}, Successful registration!`)
                        setIsError(false);
                    } else {
                        setAlertMessage("There was a problem registering.")
                        setIsError(true);
                    }
                })
                .catch((error) => {
                    console.error(error)
                    setAlertMessage("There was a problem registering.")
                    setIsError(true);
                })

            setName("")
            setEmail("")
            setPassword("")

        } else {
            setAlertMessage("Please enter your name, email and password.")
            setIsError(true);
        }
    }

        return (
            <div className="h-screen flex flex-col">
                <nav className="p-4">
                    <Link to="/">
                        <div className="container w-40 mx-auto flex items-center justify-center">
                            <img src={logo} alt="Logo"/>
                        </div>
                    </Link>
                </nav>

                <div className="flex flex-1 mt-auto justify-center items-center">
                    <div className="w-1/2 p-8">
                        <h1 className="text-5xl font-semibold text-center">MAXIMIZE YOUR MONEY</h1>
                        <p className="font-workSans text-lg font-semibold text-center flex justify-center mt-4">Just
                            like opening up your fridge's butter containers, our A.I. helps you find secret savings
                            every day!</p>
                        <p className="font-workSans text-lg font-semibold text-center mt-4">Start by creating an
                            account.</p>
                        <div className="mt-4">
                            <div className="mb-4 flex justify-center">
                                <input
                                    className="font-workSans font-medium w-96 border-2 border-gray-100 p-4"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="mb-4 flex justify-center">
                                <input
                                    className="font-workSans font-medium w-96 border-2 border-gray-100 p-4"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email Address"
                                />
                            </div>
                            <div className="mb-4 flex justify-center">
                                <input
                                    className="font-workSans font-medium w-96 border-2 border-gray-100 p-4"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                />
                            </div>
                            <div className="flex justify-center gap-4 mb-4">
                                <button
                                    className="px-6 py-3 w-96 text-white tracking-wider text-lg btn-login"
                                    onClick={handleRegister}
                                >
                                    CONTINUE
                                </button>
                            </div>
                            <div className="flex justify-center items-center">
                                {alertMessage && (
                                    <div
                                        className={`p-2 w-96 font-workSans font-bold flex justify-center items-center ${
                                            isError ? "text-red-800" : "text-green-500"
                                        } rounded`}
                                    >
                                        {alertMessage}
                                    </div>
                                )}
                            </div>
                            <div className="flex items-center justify-center mb-4">
                                <hr className="w-1/5 border-t border-gray-400"/>
                                <span className="mx-2 font-workSans font-semibold">or</span>
                                <hr className="w-1/5 border-t border-gray-400"/>
                            </div>
                            <div className="mt-4 text-center">
                                <p className="font-workSans font-semibold">Social Media Signup</p>
                                <div className="mt-4">
                                    <div className="mb-4 flex items-center justify-center">
                                        <Link to="/google-signup" className="mr-8">
                                            <img src={googleLogo} alt="Google" className="w-8 h-8"/>
                                        </Link>
                                        <Link to="/facebook-signup" className="mr-8">
                                            <img src={facebookLogo} alt="Facebook" className="w-8 h-8"/>
                                        </Link>
                                        <Link to="/apple-signup">
                                            <img src={appleLogo} alt="Apple" className="w-8 h-8"/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 text-center flex flex-col md:flex-row md:justify-center">
                                <p className="font-workSans font-medium md:mr-2">Already have an account?</p>
                                <Link to="/login">
                                    <button className="font-workSans font-bold btn-forgot-red">Log In</button>
                                </Link>
                            </div>
                            <div className="font-workSans text-sm text-center m-4">
                                <p>
                                    By signing up you agree to <Link to="/terms-of-service" className="text-blue-500">SUMA
                                    Terms of Service</Link> and <Link to="/privacy-policy" className="text-blue-500">Privacy
                                    Policy</Link>.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3">
                        <img
                            src={luchador}
                            alt="Imagen"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        );
};

export default Register;