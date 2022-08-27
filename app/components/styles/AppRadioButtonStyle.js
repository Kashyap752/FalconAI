import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        height: 300,
        backgroundColor: 'grey',
        marginTop: 10
    },
    image: {
        height: 16,
        width: 16,
        marginHorizontal: 5,
    },
    option: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
    unselected: {
        backgroundColor: 'red',
        margin: 5,
    },
    selected: {
        backgroundColor: 'blue',
        margin: 6,
        padding: 10,
        borderRadius: 10,
    },
    radioText: {
        color: 'black',
        fontSize: 14
    }
})