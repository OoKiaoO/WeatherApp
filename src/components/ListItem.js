import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import moment from 'moment';
import { weatherType } from '../utilities/weatherTyper';


const ListItem = (props) => {
    const { dt_txt, min, max, condition } = props
    //props names are placeholders - no need to match data & order not important
    const { date, temp, item, dateTextWrapper } = styles
    //destructuring styles in order to remove styles.date, styles.item & styles.temp in the component styling
    return (
        <View style={item}>
            <Feather name={weatherType[condition].icon} size={50} color={'white'} />
            <View style={styles.dateTextWrapper}>
                <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
                <Text style={date}>{moment(dt_txt).format('h:mm a')}</Text>
            </View>
            <Text style={temp}>{`${Math.round(min)}°/${Math.round(max)}°`}</Text>
        </View>

    )
}
// NOTES: need to use {} inside <Text></Text> when using props!

const styles = StyleSheet.create({
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
    },
    dateTextWrapper: {
        flexDirection: 'column'
    }
})

export default ListItem;
