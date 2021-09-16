import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Loading() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Getting the wonderful weather! example</Text>
        </View>
    )
        
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'flex-end',
        paddingHorizontal : 20,
        paddingVertical : 100,
        backgroundColor : 'royalblue'
    },
    text : {
        color : 'white',
        fontSize : 30,
    }
})