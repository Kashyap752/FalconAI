import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import axios from "axios";
import API from "../config/endpoint";
import styles from "../styles/ResultScreenStyle";
import constant from "../constants/constant";
import AppButton from "../components/AppButton";

const ResultScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const isFocused = useIsFocused();
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState();
    const [result, setResult] = useState();
    const getToken = () => {
        axios(API.GET_TOKEN, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                if (response && response.data) {
                    console.log(response.data.token);
                    setToken(response.data.token);
                }
            })
            .catch((er) => {
                console.log("Error", er);
            })
    }

    const getResult = () => {
        console.log("token", token,
            "planet_names", route.params.planet,
            "vehicle_names", route.params.vehicles);
        axios(API.FINDING_FALCON, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            data: {
                "token": token,
                "planet_names": route.params.planet,
                "vehicle_names": route.params.vehicles
            }
        })
            .then((response) => {
                setLoading(false);
                setResult(response.data);
            })
            .catch((er) => {
                console.log("Error", er);
            })
    }
    useEffect(() => {
        if (isFocused) {
            getToken();
        }
    }, [isFocused])
    useEffect(() => {
        if (token) {
            getResult();
        }
    }, [token])
    console.log(route.params);

    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{constant.title}</Text>
                </View>
                {!loading && <View style={styles.titleContainer1}>
                    <View style={{ marginTop: 50 }}>
                        {result?.status === "success" ?
                            <Text style={styles.successText}>{constant.success}{' '}{constant.successText}</Text> : <Text style={styles.successText}>{constant.failure}{' '}{constant.failureText}</Text>}
                    </View>
                    <View style={{
                        justifyContent: 'center', alignItems: 'center', flex:
                            1, marginBottom: 50,
                    }}><View style={{ justifyContent: 'center', alignItems: 'center', width: 300, height: 300, borderRadius: 150, backgroundColor: '#c2d966' }}>
                            <View style={styles.timeContainer}>
                                <Text style={styles.timeText}>{constant.timeTaken} </Text>
                                <Text style={styles.time}>{route.params.time}</Text>
                            </View>
                            {result?.planet_name && <View style={styles.timeContainer}>
                                <Text style={styles.timeText}>{constant.planetFound} </Text>
                                <Text style={styles.time}>{result.planet_name}</Text>
                            </View>}
                        </View>
                    </View>
                </View>}
            </View>
            <View style={{ marginHorizontal: 16, marginBottom: 16 }}>
                <AppButton title={constant.startAgain} onPress={() => navigation.navigate('SplashScreen')} />
            </View>
        </View>
    )
}

export default ResultScreen;