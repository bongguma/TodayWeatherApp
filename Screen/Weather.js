import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropType from 'prop-types';


export default function Weather({temp}){
    return (
    <View style={style.container}>
        <Text>
            {temp}
        </Text>
    </View>
    );
}

Weather.PropType = {
    temp: PropType.number.isRequired
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
})