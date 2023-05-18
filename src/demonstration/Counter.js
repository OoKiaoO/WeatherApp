import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from 'react-native';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [newCount, setNewCount] = useState(0);
    useEffect(() => {
        console.log(`Our count value is ${count}`);
    })
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{`count: ${count}`}</Text>
            <Button color={'red'} title={'Increase the count'} onPress={() => setCount(count + 1)} >
            </Button>
            <Button color={'green'} title={'Decrease the count'} onPress={() => setCount(count - 1)}>
            </Button>
            <Button color={'red'} title={'Increase the count'} onPress={() => setNewCount(newCount + 1)} >
            </Button>
            <Button color={'green'} title={'Decrease the count'} onPress={() => setNewCount(newCount - 1)}>
            </Button>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange'
    },
    title: {
        alignSelf: 'center',
        fontSize: 25,
        marginTop: 25
    }
})

export default Counter;
