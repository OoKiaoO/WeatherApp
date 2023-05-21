import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import { WEATHER_API_KEY } from "@env"; // ALWAYS KEEP DOUBLE QUOTES FOR THIS IMPORT!!!

export const useGetWeather = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [weather, setWeather] = useState([]);
    const [lat, setLat] = useState([]);
    const [lon, setLon] = useState([]);

    const fetchWeatherData = async () => {
        try {
            const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
            const data = await res.json();
            setWeather(data);
            // console.log(data, "data");
        } catch (e) {
            setError('Could not fetch weather!');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        ; (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setError('permission to access location was denied');
                return;
            }
            let location = await Location.getCurrentPositionAsync({})
            // setLocation(location);
            setLat(location.coords.latitude);
            setLon(location.coords.longitude);
            await fetchWeatherData();
        })() //since we want to call it immediately we pass a set of parentheses at the end
    }, [lat, lon])
    // we pass an empty array into useEffect to mean there are no dependencies and useEffect will only run once after is rendered

    return [loading, weather, false]; // NEED TO EXPORT THEM IN THE SAME ORDER AS THE IMPORT!!
}
