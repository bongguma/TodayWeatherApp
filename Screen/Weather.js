import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropType from 'prop-types';
import { MaterialCommunityIcons} from '@expo/vector-icons'


export default function Weather({temp, condition}){
    return (
    <View style={style.container}>
        <View style={style.halfContainer}>
            <MaterialCommunityIcons size={96} name="weather-lightning-rainy"></MaterialCommunityIcons>
            <Text style={style.temp}>{temp}°</Text>
        </View>
        <View style={style.halfContainer}>
            
        </View>
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
        alignItems: 'center'
    },

    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    temp: {
        fontSize: 36,
        marginTop: 10
    }
})