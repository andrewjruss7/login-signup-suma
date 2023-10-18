import React, { useState } from "react";
import { Link } from "react-router-dom";
import googleLogo from "../../Assets/SocialMedia/google-logo.png";
import facebookLogo from "../../Assets/SocialMedia/facebook-logo.png";
import appleLogo from "../../Assets/SocialMedia/apple-logo.png";
import logo from "../../Assets/logo-suma-azul.png";
import luchador from "../../Assets/luchadors.png";
import { loginUser } from "../services/apiCalls";

import "./Login.css"; // Estilos

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const [isError, setIsError] = useState(false);

    const handleLogin = () => {
        loginUser(email, password)
            .then((response) => {
                if (response.ok) {
                    setAlertMessage("Login successful");
                    setIsError(false);
                } else {
                    setAlertMessage("Login failed");
                    setIsError(true);
                }
            })
            .catch((error) => {
                console.error(error);
                setAlertMessage("Login failed");
                setIsError(true);
            });
    };

    return (
        <div className="h-screen flex flex-col">
            <nav className="p-4">
                <Link to="/">
                    <div className="container w-40 mx-auto flex items-center justify-center">
                        <img src={logo} alt="Logo" />
                    </div>
                </Link>
            </nav>

            <div className="flex flex-1 mt-auto justify-center items-center">
                <div className="w-1/3">
                    <img
                        src={luchador}
                        alt="Login"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="w-1/2 p-8">
                    <h1 className="text-4xl md:text-5xl lg:text-5xl font-semibold flex justify-center">
                        LOG IN
                    </h1>
                    <p className="font-workSans text-lg font-semibold mt-4 flex justify-center">
                        Enter your credentials to access your account.
                    </p>
                    <div className="mt-4">
                        <div className="mb-4 flex justify-center">
                            <input
                                className="font-workSans font-medium border-2 border-gray-100 p-4 w-96"
                                type="text"
                                value={email}
                                placeholder="Email Address"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-4 flex justify-center">
                            <input
                                className="font-workSans font-medium border-2 border-gray-100 p-4 w-96"
                                type="password"
                                value={password}
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="flex justify-center gap-4 mb-4">
                            <button
                                className="px-6 py-3 w-96 text-white tracking-wider text-lg btn-login"
                                onClick={handleLogin}
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
                        <div className="flex justify-center mb-4">
                            <Link to="/password-recovery">
                                <button className="font-workSans text-base font-semibold btn-forgot-red">
                                    Forgot your password?
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="mt-4 text-center">
                        <p className="font-workSans font-semibold">Social Media Login</p>
                        <div className="m-4 flex items-center justify-center">
                            <Link to="/google-login" className="mr-2">
                                <img src={googleLogo} alt="Google" className="w-6 h-6" />
                            </Link>
                            <Link to="/facebook-login" className="mr-2">
                                <img src={facebookLogo} alt="Facebook" className="w-6 h-6" />
                            </Link>
                            <Link to="/apple-login">
                                <img src={appleLogo} alt="Apple" className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>
                    <div className="mt-4 text-center flex flex-col md:flex-row md:justify-center">
                        <p className="font-workSans font-medium md:mr-2">Don't have an account?</p>
                        <Link to="/signup">
                            <button className="font-workSans font-bold btn-forgot-red">Sign up</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
