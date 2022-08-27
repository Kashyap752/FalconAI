import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from './styles/AppRadioButtonStyle'

const AppRadioOption = (props) => {
    const { data, item, onCheckRadioButton } = props;
    const [isClicked, setIsClicked] = useState(false);
    const uncheckedButton = require("../images/uncheckedRadio.png");
    const checkedButton = require("../images/checkedRadio.png");

    useEffect(() => {
        IconClick();
        console.log(isClicked);
    })
    const IconClick = () => {
        data.map((d) => {
            (d.isSelected) ? setIsClicked(true) : setIsClicked(false);
        })
    }
    return (
        <TouchableOpacity onPress={() => { onCheckRadioButton(item); setIsClicked(true) }}>
            <View style={{ flexDirection: 'row' }}>
                {isClicked ?
                    <Image source={checkedButton} style={styles.image} /> :
                    <Image source={uncheckedButton} style={styles.image} />}
                <Text>{item.label}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default AppRadioOption;