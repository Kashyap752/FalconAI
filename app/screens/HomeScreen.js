import React, { useEffect, useState } from "react";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { ScrollView, Text, View } from "react-native";
import { connect } from "react-redux";
import { getPlanetData, getVehicleData } from "../redux/actions/home";
import styles from "../styles/HomePageStyle";
import constant from '../constants/constant';
import { RadioGroup } from "react-native-radio-buttons-group";
import AppDropdownInput from "../components/AppDropdownInput";
import AppButton from "../components/AppButton";

const HomeScreen = (props) => {
    const isFocused = useIsFocused();
    const {
        isPlanetLoading,
        isPlanetFailed,
        isPlanetSuccess,
        isVehicleLoading,
        isVehicleFailed,
        isVehicleSuccess,
        planetData,
        vehicleData,
    } = props;
    const [selectedItem1, setSelectedItem1] = useState(null);
    const [selectedItem2, setSelectedItem2] = useState(null);
    const [selectedItem4, setSelectedItem4] = useState(null);
    const [selectedItem3, setSelectedItem3] = useState(null);
    const [time, setTime] = useState(0);
    const navigation = useNavigation();
    useEffect(() => {
        if (isFocused) {
            props.getPlanetData();
            props.getVehicleData();
        }
    }, [isFocused]);

    useEffect(() => {
        let time = 0;
        if (selectedItem1) {
            time = time + (selectedItem1.planet.distance / selectedItem1.vehicle.speed);
        }
        if (selectedItem2) {
            time = time + (selectedItem2.planet.distance / selectedItem2.vehicle.speed);
        }
        if (selectedItem3) {
            time = time + (selectedItem3.planet.distance / selectedItem3.vehicle.speed);
        }
        if (selectedItem4) {
            time = time + (selectedItem4.planet.distance / selectedItem4.vehicle.speed);
        }
        console.log(time);
        setTime(time);
    }, [selectedItem1, selectedItem2, selectedItem3, selectedItem4])
    console.log(selectedItem1, selectedItem2, selectedItem3, selectedItem4);
    return (
        <View style={styles.container}>
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{constant.title}</Text>
                </View>
                <View style={styles.timeContainer}>
                    <Text style={styles.timeText}>{constant.timeTaken} </Text>
                    <Text style={styles.time}>{time}</Text>
                </View>
                <View style={styles.subTitleContainer}>
                    <Text style={styles.subTitle}>{constant.subTile}</Text>
                </View>
                <View style={{ marginHorizontal: 16 }}>
                    <AppDropdownInput
                        dataSet={planetData}
                        placeholder={'Select'}
                        placeholderTextColor={'blue'}
                        setSelectedItem={setSelectedItem1}
                        label={constant.destination + " 1"}
                        vehicleData={vehicleData}
                    />
                    <AppDropdownInput
                        dataSet={planetData}
                        placeholder={'Select'}
                        placeholderTextColor={'blue'}
                        setSelectedItem={setSelectedItem2}
                        label={constant.destination + " 2"}
                        vehicleData={vehicleData}
                    />
                    <AppDropdownInput
                        dataSet={planetData}
                        placeholder={'Select'}
                        placeholderTextColor={'blue'}
                        setSelectedItem={setSelectedItem3}
                        label={constant.destination + " 3"}
                        vehicleData={vehicleData}
                    />
                    <AppDropdownInput
                        dataSet={planetData}
                        placeholder={'Select'}
                        placeholderTextColor={'blue'}
                        setSelectedItem={setSelectedItem4}
                        label={constant.destination + " 4"}
                        vehicleData={vehicleData}
                    />
                </View>
            </ScrollView>
            <View style={{ marginHorizontal: 16, marginBottom: 16 }}>

                <AppButton title={constant.buttonLabel} onPress={() => {
                    navigation.navigate('ResultScreen', { planet: [selectedItem1.planet.name, selectedItem2.planet.name, selectedItem3.planet.name, selectedItem4.planet.name], vehicles: [selectedItem1.vehicle.name, selectedItem2.vehicle.name, selectedItem3.vehicle.name, selectedItem4.vehicle.name], time: time });
                }} disabled={!(selectedItem1 && selectedItem2 && selectedItem3 && selectedItem4)} />
                {/* <Button title={constant.buttonLabel} onPress={() => {
                    navigation.navigate('ResultScreen', { planet: [selectedItem1.planet.name, selectedItem2.planet.name, selectedItem3.planet.name, selectedItem4.planet.name], vehicles: [selectedItem1.vehicle.name, selectedItem2.vehicle.name, selectedItem3.vehicle.name, selectedItem4.vehicle.name], time: time });
                }} disabled={!(selectedItem1 && selectedItem2 && selectedItem3 && selectedItem4)} /> */}
            </View>
        </View>
    )
}

const mapsStateToProps = (state) => {
    return {
        isPlanetLoading: state.home.isPlanetLoading,
        isPlanetFailed: state.home.isPlanetFailed,
        isPlanetSuccess: state.home.isPlanetSuccess,
        isVehicleLoading: state.home.isVehicleLoading,
        isVehicleFailed: state.home.isVehicleFailed,
        isVehicleSuccess: state.home.isVehicleSuccess,
        planetData: state.home.planetData,
        vehicleData: state.home.vehicleData,
    }
}

const mapsDispatchToProps = (dispatch) => {
    return {
        getPlanetData: () => dispatch(getPlanetData()),
        getVehicleData: () => dispatch(getVehicleData())
    }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(HomeScreen);