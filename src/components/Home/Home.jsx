import React from "react";
import { Link, Outlet } from "react-router-dom";
import './Home.css';

import luchadors from '../../Assets/luchadors.png';
import logo from '../../Assets/logo-suma-azul.png'

const Home = () => {
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
                        src={luchadors}
                        alt="Luchadors"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="w-1/2 p-8">
                    <div className="px-20 py-20">
                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-semibold">
                            AN A.I POWERED PLATFORM <br /> TO BUILD WEALTH, TOGETHER
                        </h1>
                        <p className="font-medium text-lg md:text-xl lg:text-2xl mt-4">Fire up your wealth building ability with your personalized A.I powered money coach and human financial advisor!</p>
                        <p className="font-medium text-lg md:text-xl lg:text-2xl mt-4">Cure your financial pains, and go from “ay, my money” to “money A.I”, so you don't have to light saints candles to improve your financial future.</p>
                        <div className="mt-8">
                            <div className="mt-8 flex flex-col md:flex-row items-center justify-between">
                                <Link to="/login">
                                    <button
                                        className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 w-64 px-6 rounded-b mb-4 md:mb-0 md:mr-4 bg-button text-white text-lg font-bold"
                                    >
                                        LOGIN
                                    </button>
                                </Link>
                                <Link to="/signup">
                                    <button
                                        className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 w-64 px-6 rounded-b bg-button text-white text-lg font-bold"
                                    >
                                        SIGN UP
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default Home;