import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const ListItem = (props) => {
    const { dt_txt, min, max, condition } = props
    //props names are placeholders - no need to match data & order not important
    const { date, temp, item } = styles
    //destructuring styles in order to remove styles.date, styles.item & styles.temp in the component styling
    return (
        <View style={item}>
            <Feather name={'sun'} size={50} color={'white'} />
            <Text style={date}>{dt_txt}</Text>
            <Text style={temp}>{min}</Text>
            <Text style={temp}>{max}</Text>
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
    }
})

export default ListItem;
