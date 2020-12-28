import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropType from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialCommunityIcons} from '@expo/vector-icons'

// https://openweathermap.org/weather-conditions  - weather-conditions 안에 1XX code로 나타내는 날씨가 없음으로 1은 제외.
// icon 스트링 값을 반환 gradient 배열 값을 반환
// icon은 날씨에 대한 이미지 gradient 그라데이션 색상 값
const WeatherGroup = {
    0: { icon: 'weather-sunny' },
    2: { icon: 'weather-lightning' },
    3: { icon: 'weather-rainy' },
    5: { icon: 'weather-pouring' },
    6: { icon: 'weather-snowy' },
    7: { icon: 'weather-fog',
         gradient: ["#4DA0B0", "#D39D38"] },
    8: { icon: 'weather-cloudy' }
  }


export default function Weather({temp, condition, weatherName}){
    const weather = condition === 800 ? WeatherGroup[0] : WeatherGroup[parseInt(condition / 100)];
    return (
    // <View style={style.container}>
        // LinearGradient - 그라데이션 레이아웃 태그
        <LinearGradient 
            colors={weather.gradient}
            style={style.container}>
            {/* 디바이스에 대한 제일 큰 영역을 잡아주는 레이아웃 위가 아닌 그 안에다가 statusbar 태그를 사용해주는 이유는? */}
            <StatusBar barStyle="light-content"/>
            <View style={style.halfContainer}>
                <MaterialCommunityIcons size={96} name={weather.icon} color="white"></MaterialCommunityIcons> 
                <Text style={style.weather}>{weatherName}</Text>  
                <Text style={style.temp}>{temp}°</Text>  
            </View>
            <View style={style.halfContainer}>
                
            </View>
            </LinearGradient>
    // </View>
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
        color: 'white',
        marginTop: 10
    },

    temp: {
        fontSize: 28,
        color: 'white',
        marginTop: 5
    }
})