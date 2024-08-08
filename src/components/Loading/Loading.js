import React from "react";
import LottieView from "lottie-react-native";
import {StyleSheet } from 'react-native';


function Loading(){
    return <LottieView source={require('../../assets/loading.json')} autoPlay loop style={styles.animation}
    />;
}

const styles = StyleSheet.create({
    animation: {
        width: 400,
        height:500,
        alignItems:'center' //Lottie paketlerini kullanmak için width ve height değerlerini girmek gerekiyor
    },
})
export default Loading;