import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from './styles/AppButtonStyle';

const AppButton = (props) => {
    const { onPress, title, disabled } = props;
    return (
        <TouchableOpacity onPress={onPress} disabled={disabled}>
            <View style={[styles.buttonContainer, { opacity: disabled ? 0.5 : 1 }]}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    )

}

export default AppButton;