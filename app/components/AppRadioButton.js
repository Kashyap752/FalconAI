import React, { useEffect, useState } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import styles from './styles/AppRadioButtonStyle'


const AppRadioButton = (props) => {
    const { data, setSelectedVehicle, planetData } = props;
    console.log("PlanetData", planetData, data);
    const [userOption, setUserOption] = useState(null);
    const selectHandler = (item, index) => {
        setUserOption(item.name);
        setSelectedVehicle(item);
        data[index].total_no = data[index].total_no - 1;
    };

    const uncheckedButton = require("../images/uncheckedRadio.png");
    const checkedButton = require("../images/checkedRadio.png");
    return (
        <View style={{ marginVertical: 15, marginHorizontal: 16 }}>
            {data && data.map((item, index) => {
                const isDisable = item.total_no == 0 || planetData.distance > item.max_distance
                return (
                    <Pressable
                        disabled={isDisable}
                        onPress={() => selectHandler(item, index)}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 2 }}>
                            {item.name === userOption ?
                                <Image source={checkedButton} style={styles.image} /> :
                                <Image source={uncheckedButton} style={styles.image} />}
                            <Text style={[styles.radioText, { color: isDisable ? 'grey' : 'black' }]}>{item.name} ({item.total_no})</Text>
                        </View>
                    </Pressable>
                );
            })}
        </View>
    );
}

export default AppRadioButton;