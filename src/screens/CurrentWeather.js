import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';
import { weatherType } from '../utilities/weatherTyper';

const CurrentWeather = ({ weatherData }) => {
    const {
        wrapper,
        container,
        tempStyles,
        feels,
        highLowWrapper,
        highLow,
        bodyWrapper,
        description,
        message
    } = styles
    console.log(weatherData, "weatherData[0]");

    const {
        main: { temp, feels_like, temp_max, temp_min },
        weather
    } = weatherData;

    const weatherCondition = weather[0]?.main;
    return (
        <SafeAreaView style={[
            wrapper,
            { backgroundColor: weatherType[weatherCondition]?.backgroundColor }
        ]}
        >
            <View style={container}>
                <Feather
                    name={weatherType[weatherCondition]?.icon}
                    size={100}
                    color="white"
                    marginBottom={30}
                />
                <Text style={tempStyles}>{`${Math.round(temp)}°`}</Text>
                <Text style={feels}>{`Feels like ${Math.round(feels_like)}°`}</Text>
                <RowText
                    messageOne={`High: ${Math.round(temp_max)}° `}
                    messageTwo={`Low: ${Math.round(temp_min)}°`}
                    containerStyles={highLowWrapper}
                    messageOneStyles={highLow}
                    messageTwoStyles={highLow}
                />
            </View>
            <RowText
                messageOne={weather[0]?.description}
                messageTwo={weatherType[weatherCondition]?.message}
                containerStyles={bodyWrapper}
                messageOneStyles={description}
                messageTwoStyles={message}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    highLowWrapper: {
        flexDirection: 'row'
    },
    bodyWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'

    },
    tempStyles: {
        color: 'black',
        fontSize: 48
    },
    feels: {
        fontSize: 30,
        color: 'black'
    },
    highLow: {
        color: 'black',
        fontSize: 20
    },
    description: {
        fontSize: 43,
    },
    message: {
        fontSize: 25,
    }
})

export default CurrentWeather;
