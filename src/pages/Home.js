import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import { CryptoProvider } from "../context/CryptoContext";
import { TrendingProvider } from "../context/TrendingContext";
import { StorageProvider } from "../context/StorageContext";


const Home = () => {
    return (
        <CryptoProvider>
            <TrendingProvider>
                <StorageProvider>
                    <main className=" w-full h-full flex flex-col justify-center first-letter:content-center items-center relative text-white font-nunitio">
            <div className=" w-full h-full bg-gray-300 fixed -z-10 top-0" />
                <Logo />
                <Navigation /> 

            <Outlet />
        </main>
        </StorageProvider>
        </TrendingProvider>
        </CryptoProvider>

    );
};
 
export default Home;