import React from "react";
import { SafeAreaView, StyleSheet, Text, FlatList, View, StatusBar, ImageBackground } from "react-native";
import ListItem from "../components/ListItem";


const DATA = [
    {
        dt_txt: "2022-08-30 12:00:00",
        main: {
            temp_min: 296.76,
            temp_max: 297.87,
        },
        weather: [
            {
                main: "Rain",
            }
        ]
    },
    {
        dt_txt: "2022-08-30 15:00:00",
        main: {
            temp_min: 296.76,
            temp_max: 297.87,
        },
        weather: [
            {
                main: "Clouds",
            }
        ]
    },
    {
        dt_txt: "2022-08-30 18:00:00",
        main: {
            temp_min: 296.76,
            temp_max: 297.87,
        },
        weather: [
            {
                main: "Clear",
            }
        ]
    }
];

const UpcomingWeather = () => {
    const renderItem = ({ item }) => (
        <ListItem
            condition={item.weather[0].main}
            dt_txt={item.dt_txt}
            min={item.main.temp_min}
            max={item.main.temp_max}
        />
    ); // because we want to render sth we use parenthesis & NOT curly braces!
    const { container, image } = styles
    // destructuring styles to remove style.container & style.image in the component styling
    return (
        <SafeAreaView style={container}>
            <ImageBackground
                source={require('../../assets/upcoming-background.jpg')}
                style={image}
            >
                <Text>Upcoming Weather</Text>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.dt_txt}
                />
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,  // (?) StatusBar
        backgroundColor: 'royalblue'
    },
    image: {
        flex: 1
    }
})
export default UpcomingWeather;
