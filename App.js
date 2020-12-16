import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Loading from './Screen/Loadng';

import * as Loaction from 'expo-location';

export default class extends React.Component {

  state = {
    isLoading : true
  };

  getLocation = async () => {
    try {
      console.log("try")
      // 위치 권한 설정을 물어보는 팝업을 띄어줌
      const response = await Loaction.requestPermissionsAsync();
      // getCurrentPositionAsync 안에 존재 하는 'coords' Object 안에서 경도와 위도 데이터를 가져온다.
      const { coords: {latitude, longitude} } = await Loaction.getCurrentPositionAsync();
      console.log("latitude ::" + coords.latitude + "longitude :: " + coords.longitude);
      this.setState({isLoading : false});

    } catch (error) {
      console.log("catch")
      Alert.alert("위치 권한이 설정되어 있지 않습니다.", "올바른 위치 권한 설정이 진행되어야 합니다.")
    }
  };

  componentDidMount() {
    this.getLocation();
  }

  render(){
    const {isLoading} = this.state;
    console.log("isLoading ::" + isLoading);
    return isLoading ? <Loading /> : null;
  }
}

// function 함수형 컴포넌트식으로 리액트 네이티브 구현 방식
// export default function App() {
//   return (
//     <Loading />
//     // expo-cli를 이용해 기본 스타일 구현 작업
//     // <View style={styles.container}>
//     //   <View style={styles.yellowView}>
//     //     <Text Style={styles.text}>Hello! yellow</Text>
//     //   </View>
//     //   <View style={styles.greenView}>
//     //     <Text Style={styles.text}>Hello! green</Text>
//     //   </View>
//     //   <StatusBar styles="auto" />
//     // </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection:'row',   // 컨테이너 안에 있는 것을 행으로 정렬
    backgroundColor: '#fff',
    // alignItems: 'center',  // 가운데 정렬을 위해 필요
    // justifyContent: 'center',
  },
  yellowView: {
    flex: 1,
    backgroundColor:'yellow'
  },
  greenView: {
    flex: 1,
    backgroundColor:'green'
  },
  text: {
    color:'black',
  },
});
