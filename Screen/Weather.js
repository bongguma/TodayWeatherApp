import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropType from 'prop-types';
import { MaterialCommunityIcons} from '@expo/vector-icons'

// 
const WeatherGroup = {
    0: { icon: 'weather-sunny' },
    2: { icon: 'weather-lightning' },
    3: { icon: 'weather-rainy' },
    5: { icon: 'weather-pouring' },
    6: { icon: 'weather-snowy' },
    7: { icon: 'weather-fog' },
    8: { icon: 'weather-cloudy' }
  }


export default function Weather({temp, condition, weatherName}){
    const weather = condition === 800 ? WeatherGroup[0] : WeatherGroup[parseInt(condition / 100)];
    return (
    <View style={style.container}>
        <View style={style.halfContainer}>
            <MaterialCommunityIcons size={96} name={weather.icon}></MaterialCommunityIcons> 
            <Text style={style.weather}>{weatherName}</Text>  
            <Text style={style.temp}>{temp}°</Text>  
        </View>
        <View style={style.halfContainer}>
            
        </View>
    </View>
    );
}

Weather.PropType = {
    temp: PropType.number.isRequired,
    condition: PropType.number.isRequired,
    weatherName: PropType.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Atmosphere", "Clear", "Clounds"].isRequired)
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

    weather:{
        fontSize: 36,
        fontWeight: 'bold',
        marginTop: 10
    },

    temp: {
        fontSize: 28,
        marginTop: 5
    }
})