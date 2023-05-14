import React from "react";
import { SafeAreaView, StyleSheet, Text, FlatList, View, StatusBar } from "react-native";
import { Feather } from '@expo/vector-icons';

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

const Item = (props) => {
    const { dt_txt, min, max, condition } = props
    //props names are placeholders - no need to match data & order not important
    return (
        <View style={styles.item}>
            <Feather name={'sun'} size={50} color={'white'} />
            <Text style={styles.date}>{dt_txt}</Text>
            <Text style={styles.temp}>{min}</Text>
            <Text style={styles.temp}>{max}</Text>
        </View>

    )
}
// NOTES: need to use {} inside <Text></Text> when using props!

const UpcomingWeather = () => {
    const renderItem = ({ item }) => (
        <Item
            condition={item.weather[0].main}
            dt_txt={item.dt_txt}
            min={item.main.temp_min}
            max={item.main.temp_max}
        />
    ); // because we want to render sth we use parenthesis & NOT curly braces!

    return (
        <SafeAreaView style={styles.container}>
            <Text>Upcoming Weather</Text>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.dt_txt}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,  // (?) StatusBar
        backgroundColor: 'red'
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 5,
        backgroundColor: 'pink'
    },
    temp: {
        color: 'white',
        fontSize: 15
    },
    date: {
        color: 'white',
        fontSize: 13
    }
})
export default UpcomingWeather;
