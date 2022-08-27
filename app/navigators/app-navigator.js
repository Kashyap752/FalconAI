import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../screens/HomeScreen";
import SplashScreen from "../screens/SplashScreen";
import ResultScreen from "../screens/ResultScreen";

const AppStack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="SplashScreen" component={SplashScreen} />
            <AppStack.Screen name="HomeScreen" component={HomeScreen} />
            <AppStack.Screen name="ResultScreen" component={ResultScreen} />
        </AppStack.Navigator>
    )


}

export default AppNavigator;