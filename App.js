import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loading from './Screen/Loadng';

import * as Loaction from 'expo-location';

export default class extends React.Component {
  getLocation = async () => {
    const location = await Loaction.getCurrentPositionAsync();
    console.log(location);
  }

  componentDidMount() {
    this.getLocation();
  }

  render(){
    return <Loading />;
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
