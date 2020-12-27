import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropType from 'prop-types';


export default function Weather({temp, condition}){
    return (
    <View style={style.container}>
        <Text>
            {temp}
        </Text>
    </View>
    );
}

Weather.PropType = {
    temp: PropType.number.isRequired,
    condition: PropType.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Atmosphere", "Clear", "Clounds"].isRequired)
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
})