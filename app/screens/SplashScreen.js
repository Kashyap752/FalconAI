import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Button, Text, TextInput, View, Image, Pressable, ImageBackground, StatusBar } from "react-native";
import AppButton from "../components/AppButton";
import styles from "../styles/SplashScreenStyle"
const SplashScreen = () => {
    const navigation = useNavigation();
    const falconAI = require('../images/FalconAI.png');
    return (
        <ImageBackground source={falconAI} style={{
            flex: 1,
            justifyContent: 'center',
        }} >

            <View style={{ flex: 1, justifyContent: 'flex-end', alignContent: 'center', marginBottom: 30 }}>

                <View style={{ marginHorizontal: 16 }}>
                    <AppButton onPress={() => navigation.navigate("HomeScreen")} title={"Let's start finding Falcon"} />
                </View>
            </View>
        </ImageBackground>
    )
}

export default SplashScreen;