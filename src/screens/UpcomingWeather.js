import React from "react";
import { SafeAreaView, StyleSheet, FlatList, StatusBar, ImageBackground } from "react-native";
import ListItem from "../components/ListItem";

const UpcomingWeather = ({ weatherData }) => {
    console.log(weatherData, "weatherData");

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
                <FlatList
                    data={weatherData}
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
