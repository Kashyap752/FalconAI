import React, { useEffect, useState } from "react";
import { FlatList, Image, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import AppRadioButton from "./AppRadioButton";
import styles from './styles/AppDropdownInputStyle'
const AppDropdownInput = (props) => {
    const {
        dataSet,
        placeholder,
        placeholderTextColor,
        setSelectedItem,
        label,
        vehicleData
    } = props
    const [isClicked, setIsClicked] = useState(false);
    const [selectedVehicle, setSelectedVehicle] = useState(null);
    const [selectedPlanet, setSelectedPlanet] = useState(null);
    const [showSuggestion, setShowSuggestion] = useState(false);
    const [input, setInput] = useState('');
    const [data, setData] = useState([]);
    const crossIcon = require('../images/cross.png');
    const downIcon = require('../images/down-arrow.png');
    const upIcon = require('../images/up-arrow.png');

    useEffect(() => {
        setData(dataSet);
    }, [dataSet])

    useEffect(() => {
        if (selectedPlanet && selectedVehicle) {
            const item = { planet: selectedPlanet, vehicle: selectedVehicle };
            setSelectedItem(item);
        }
    }, [selectedVehicle])


    const onChangeText = (text) => {
        setInput(text);
        if (text != "" || text != null) {
            setInput(text.trim());
            const query = text.toLowerCase();
            const tempData = dataSet.filter((data) => {
                if (data.name.toLowerCase().includes(query)) {
                    return data;
                }
                // else {
                //     return "nothing";
                // }
            })
            setData(tempData);
        }

    }

    const onCrossIconPress = () => {
        setInput('');
        setIsClicked(false);
        setData(dataSet);
    }

    const onArrowIconPress = () => {
        setIsClicked(!isClicked);
        setShowSuggestion(!showSuggestion);
    }

    const GetDropDownList = () => {
        return (
            <View style={{ maxHeight: 200 }}>
                {data.length != 0 ?
                    <FlatList
                        data={data}
                        numColumns={1}
                        nestedScrollEnabled
                        renderItem={({ item, index }) => (
                            <TouchableOpacity onPress={() => {
                                onChangeText(item.name);
                                setShowSuggestion(false);
                                setIsClicked(false);
                                // setSelectedItem(item);
                                setSelectedPlanet(item);
                                dataSet.splice(index, 1);
                            }}>
                                <View style={styles.optionContainer}>
                                    <Text style={styles.optionText}>
                                        {item.name}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    /> :
                    <View style={styles.optionContainer}>
                        <Text style={styles.optionText}>
                            {'Nothing found'}
                        </Text>
                    </View>}
            </View>
        )
    }

    return (
        <View style={{ paddingVertical: 16 }}>
            <Text style={styles.label}>
                {label}
            </Text>
            <View style={styles.container}>
                <TextInput
                    style={styles.inputContainer}
                    placeholder={placeholder}
                    value={input}
                    allowFontScaling={false}
                    onChangeText={(text) => onChangeText(text)}
                    onFocus={() => {
                        setShowSuggestion(true);
                        setIsClicked(true);
                    }}
                />
                <View style={styles.imageContainer}>
                    {input != '' &&
                        <Pressable onPress={() => onCrossIconPress()}>
                            <Image source={crossIcon} style={styles.image1} />
                        </Pressable>}

                    <Pressable onPress={() => onArrowIconPress()}>
                        {isClicked ?
                            <Image source={upIcon} style={styles.image} />
                            :
                            <Image source={downIcon} style={styles.image} />}
                    </Pressable>
                </View>
            </View>
            {data && showSuggestion &&
                <View style={{ borderColor: 'grey', borderWidth: 2, borderRadius: 8, marginTop: 5 }}>
                    {GetDropDownList()}
                </View>}
            {selectedPlanet && <View style={{}}>
                <AppRadioButton data={vehicleData} planetData={selectedPlanet} setSelectedVehicle={setSelectedVehicle} />
            </View>}
        </View>
    )
}

export default AppDropdownInput;
