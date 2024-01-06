"use client";
import { useState, useEffect } from "react";
import Script from "next/script";
const UserLoaction = () => {
    const [location, setLocation] = useState(null);

    const getLocation = () => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position) => {
                setLocation(position);
            });
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

    useEffect(() => {
        getLocation();
    }, []);
    return (
        <div>
        <Script 
            src="/location.js"
            onLoad={() => {console.log("File Loaded")}}
        />
            <h1>Get User Location</h1>
            {
                location && (
                    <div>
                        <p>Latitude: {location.coords.latitude}</p>
                        <p>Longitude: {location.coords.longitude}</p>
                    </div>
                )
            }
        </div>
    )
}

export default UserLoaction;