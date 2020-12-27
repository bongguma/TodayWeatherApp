import React from "react";
import { Alert } from "react-native";
import Loading from "./Screen/Loadng";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Screen/Weather";

const API_KEY = "971646f3a4af7308a4ac102f9e0317f4";

export default class extends React.Component {
  state = {
    isLoading: true
  };

// ${ 변수 }는 template string 으로 자바스크립트 형식이다.
//     // lat | lon - 현재 위치에 경도와 위도를 표현하고 있다.
//     // unit - 현재 날씨 온도를 나타낼 때 기준이 화씨인데 metric는 섭씨로 표현하고 있다.

getWeather = async (latitude, longitude) => {
  const {
    data: {
      main: { temp }, weather
    }
  } = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
  );
  this.setState({
    isLoading: false, condition: weather[0].id, weatherName: weather[0].main, temp
  });
};


getLocation = async () => {
  try {
    console.log("try")
    // 위치 권한 설정을 물어보는 팝업을 띄어줌
    await Location.requestPermissionsAsync();
    // getCurrentPositionAsync 안에 존재 하는 'coords' Object 안에서 경도와 위도 데이터를 가져온다.
    const {
      coords: { latitude, longitude }
    } = await Location.getCurrentPositionAsync();
    this.getWeather(latitude, longitude);
  } catch (error) {
    console.log("catch")
    Alert.alert("위치 권한이 설정되어 있지 않습니다.", "올바른 위치 권한 설정이 진행되어야 합니다.");
  }
};

  // 컴포넌트가 마운트 된 직후에 그려지는 메서드로 컴포넌트가 만들어지고 render가 먼저 수행된 직후에 호출되는 메서드 
  componentDidMount() {
    this.getLocation();
  }

  // 클래스 컴포넌트에서 반드시 구현돼야하는 유일한 메서드
  render() {
    // isloading 여부에 따른 화면 보여주기
    const { isLoading, temp, condition, weatherName } = this.state;
    console.log("isLoading" + isLoading);
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} weatherName={weatherName}/>;
  }
}


// // function 함수형 컴포넌트식으로 리액트 네이티브 구현 방식
// // export default function App() {
// //   return (
// //     <Loading />
// //     // expo-cli를 이용해 기본 스타일 구현 작업
// //     // <View style={styles.container}>
// //     //   <View style={styles.yellowView}>
// //     //     <Text Style={styles.text}>Hello! yellow</Text>
// //     //   </View>
// //     //   <View style={styles.greenView}>
// //     //     <Text Style={styles.text}>Hello! green</Text>
// //     //   </View>
// //     //   <StatusBar styles="auto" />
// //     // </View>
// //   );
// // }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // flexDirection:'row',   // 컨테이너 안에 있는 것을 행으로 정렬
//     backgroundColor: '#fff',
//     // alignItems: 'center',  // 가운데 정렬을 위해 필요
//     // justifyContent: 'center',
//   },
//   yellowView: {
//     flex: 1,
//     backgroundColor:'yellow'
//   },
//   greenView: {
//     flex: 1,
//     backgroundColor:'green'
//   },
//   text: {
//     color:'black',
//   },
// });
