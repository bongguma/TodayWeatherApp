import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropType from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialCommunityIcons} from '@expo/vector-icons'

// https://openweathermap.org/weather-conditions  - weather-conditions 안에 1XX code로 나타내는 날씨가 없음으로 1은 제외.
// icon 스트링 값을 반환 gradient 배열 값을 반환
// icon은 날씨에 대한 이미지 gradient 그라데이션 색상 값
const WeatherGroup = {
    0: { icon: 'weather-sunny',
         gradient: ["#FF7300", "#FEF253"] },
    2: { icon: 'weather-lightning',
         gradient: ["#373B44", "#4286f4"] },
    3: { icon: 'weather-rainy',
         gradient: ["#00C6FB", "#005BEA"] },
    5: { icon: 'weather-pouring',
         gradient: ["#89F7FE", "#66A6FF"] },
    6: { icon: 'weather-snowy',
         gradient: ["#7DE2FC", "#B9B6E5"] },
    7: { icon: 'weather-fog',
         gradient: ["#4DA0B0", "#D39D38"],
         title: "구름이 많이 낀 날 입니다.",
         subTitle: "안전운전 하세요." },
    8: { icon: 'weather-cloudy',
         gradient: ["#D7D2CC", "#304352"],
         title: "구름이 많이 낀 날 입니다.",
         subTitle: "안전운전 하세요." }
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
            {/* 하나의 태그 안에 한 개 이상에 스타일을 넣을 수 있다. */}
            <View style={{...style.halfContainer, ...style.textContainer}}>
            <Text style={style.title}>{weather.title}</Text>        
            <Text style={style.subTitle}>{weather.subTitle}</Text>
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
    },

    title: {
        color: 'white',
        fontSize: 32,
        fontWeight:"300",
        marginBottom: 10
    },

    subTitle : {
        color: 'white',
        fontSize: 20,
        fontWeight:"600"
    },

    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
})